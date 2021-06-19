import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import api from '../utils/api';
import * as auth from '../utils/auth';
import CurrentUserContext from '../contexts/CurrentUserContext';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import PopupConfirmDeletion from './PopupConfirmDeletion';
import Login from './Login';
import Register from './Register';
import InfoTooltip from './InfoTooltip';
import ProtectedRoute from './ProtectedRoute';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [cardForDeletion, setCardForDeletion] = React.useState('');
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [loggedIn, setIsLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const history = useHistory();
  //стейт для юзеринфо
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    about: '',
    avatar: ''
  });
  //проверяем статус получения данных. Если false, не рендерим Main и Footer
  const [isUserDataReceived, setIsUserDataReceived] = React.useState(false);
  //стейт для карточек
  const [cards, setCards] = React.useState([]);
  // submit status
  const [isSubmitting, setIsSubmitting] = React.useState({
    profile: true,
    avatar: true,
    place: true,
    login: true,
    register: true,
    deletion: true
  });
  const [isStatusPopupOpen, setIsStatusPopupOpen] = React.useState(false);
  const [popupStatusMessage, setPopupStatusMessage] = React.useState({
    errorStatus: null,
    message: '',
  });

  //колбэк - закрытия попапов с формой
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleCardClick(state) {
    setSelectedCard(state);
  }
  //закрытие попапа
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
    setCardForDeletion('');
    setIsStatusPopupOpen(false);
    // setTimeout(setPopupStatusMessage({
    //   errorStatus: null,
    //   message: '',
    // }), 1000);
  }

  React.useEffect(() => {
    //получаем персональные данные и карточки только когда залогинены
    if (loggedIn) {
      Promise.all([api.getUserInfo(), api.getCards()])
        .then(([userData, cardData]) => {
          setCurrentUser(userData);
          setCards(cardData);
          setIsUserDataReceived(true);
        })
        .catch(err => {
          setIsStatusPopupOpen(true);
          setErrorMessage(err.status);
        })
    }
  }, [loggedIn])


  //колбэк - обновление данных пользователя новыми данными из формы редактирования профиля
  function handleUpdateUser(newUserData) {
    //submit status в момент ожидания
    setIsSubmitting(prevState => ({
      ...prevState,
      profile: false
    }))
    api.sendUserInfo(newUserData)
      .then((newUserDataFromServer) => {
        //обновляем контекст стейт currentUser после редактирования формы
        setCurrentUser(newUserDataFromServer);
        closeAllPopups();
      })
      .catch(err => {
        setIsStatusPopupOpen(true);
        setErrorMessage(err.status);
      })
      .finally(() => {
        //submit status в финале запроса
        setIsSubmitting(prevState => ({
          ...prevState,
          profile: true
        }))
      })
  }

  //колбэк - обновление аватара новыми данными из формы аватара
  function handleUpdateAvatar(newUrl) {
    setIsSubmitting(prevState => ({
      ...prevState,
      avatar: false
    }));
    api.sendUserAvatar(newUrl)
      .then((newUserDataFromServer) => {
        //обновляем контекст стейт currentUser после редактирования формы
        setCurrentUser(newUserDataFromServer);
        closeAllPopups();
      })
      .catch(err => {
        setIsStatusPopupOpen(true);
        setErrorMessage(err.status);
      })
      .finally(() => {
        setIsSubmitting(prevState => ({
          ...prevState,
          avatar: true
        }));
      })
  }

  //колбэк - лайка карточки
  function handleCardLike(activatedCard) {
    //проверяем, есть ли уже лайк на этой карточке
    const isLiked = activatedCard.likes.some(like => like._id === currentUser._id);

    //Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(activatedCard._id, !isLiked)
      .then((updatedCard) => {
        //обновляем массив карточек cards для рендеринга с новым кол-вом лайков
        setCards((state) => state.map((c) => c._id === activatedCard._id ? updatedCard : c));
        //setCards((state) => {
        //  //в изначальном массиве перебираем через map карточки
        //  //если находим лайкнутую, обновляем ее
        //  //если находим нелайкнутую, не обновляем ее
        //  return (state.map( (card) => {
        //    return (card._id === activatedCard._id ? updatedCard : card)
        //  }))
        //})
      })
      .catch((err) => {
        setIsStatusPopupOpen(true);
        setErrorMessage(err.status);
      });
  }

  //колбэк - удаления карточки
  function handleCardDelete(card) {
    setIsSubmitting(prevState => ({
      ...prevState,
      deletion: false
    }))
    api.deleteCard(card._id)
      .then(() => {
        //оборачиваем setCards в колбек, чтобы удаление карточки со страницы происходило только после возвращения ответа от сервера
        //после удаления карточки в стейт Cards записываем новый массив оставшихся карточек
        setCards(
          cards.filter(item => {
            //возвращаем только те карточки, которые не совпадают по id с удаленной
            return item._id !== card._id
          }))
        closeAllPopups();
      })
      .catch((err) => {
        setIsStatusPopupOpen(true);
        setErrorMessage(err.status);
      })
      .finally(() => {
        setIsSubmitting(prevState => ({
          ...prevState,
          deletion: true
        }))
      })
  }

  //колбэк - добавление новой карточки
  function handleAddPlace(newCardData) {
    setIsSubmitting(prevState => ({
      ...prevState,
      place: false
    }));
    api.sendNewCard(newCardData)
      .then((newCardFromServer) => {
        //в стейт Cards дозаписываем новую только что созданную карточку
        setCards([newCardFromServer, ...cards]);
        closeAllPopups();
      })
      .catch(err => {
        setIsStatusPopupOpen(true);
        setErrorMessage(err.status);
      })
      .finally(() => {
        setIsSubmitting(prevState => ({
          ...prevState,
          place: true
        }));
      })
  }

  //обработчик ошибок ответа сервера
  function setErrorMessage(status) {
    const errorTexts = {
      '400': {
        errorType: 'fault',
        errorText: 'Некорректно заполнено одно из полей',
      },
      '401': {
        errorType: 'fault',
        errorText: 'Некорректный email или пароль',
      },
      '201': {
        errorType: 'success',
        errorText: 'Вы успешно зарегистрировались!',
      },
      other: {
        errorType: 'fault',
        errorText: 'Что - то пошло не так! Попробуйте ещё раз.',
      },
      serverError: {
        errorType: 'fault',
        errorText: 'Сервер не отвечает. Попробуйте позже.',
      }
    }
    if (typeof status === "undefined") {
      setPopupStatusMessage({
        errorType: errorTexts.other.errorType,
        errorText: errorTexts.other.errorText,
      })
    } else {
      setPopupStatusMessage({
        errorType: errorTexts[status].errorType,
        errorText: errorTexts[status].errorText,
      })
    }
  }

  //обработчики форм
  //колбэк - регистрации
  function handleRegister(email, password) {
    setIsSubmitting(prevState => ({
      ...prevState,
      register: false
    }))
    auth.register(email, password)
      .then(data => {
        //открываем попап статуса и добавляем успешный месседж для него
        if (data) {
          setIsLoggedIn(false)
          setIsStatusPopupOpen(true);
          setErrorMessage(201);
        }
      })
      .catch(err => {
        setIsStatusPopupOpen(true);
        setErrorMessage(err.status);
      })
      .finally(() => {
        setIsSubmitting(prevState => ({
          ...prevState,
          register: true
        }))
      })
  }

  //колбэк - логина
  function handleLogin(email, password) {
    setIsSubmitting(prevState => ({
      ...prevState,
      login: false
    }))
    if (!email || !password) {
      return
    }
    auth.login(email, password)
      .then(data => {
        if (data.token) {
          localStorage.setItem('jwt', data.token)
          //запишем емейл для подстановки в шапку, потому что он не подставляется в шапку при входе через логин
          setEmail(email)
          setIsLoggedIn(true);
          history.push('/');
        }
      })
      .catch(err => {
        setIsStatusPopupOpen(true);
        setErrorMessage(err.status);
      })
      .finally(() => {
        setIsSubmitting(prevState => ({
          ...prevState,
          login: true
        }))
      })
  }

  //колбэк - разлогиниться
  function handleSignOut() {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    history.push('/sign-in');
  }

  // если у пользователя есть токен в localStorage
  function checkToken() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.getContent(jwt)
        .then(res => {
          if (res) {
            //запишем емейл для подстановки в шапку
            setEmail(res.data.email)
            setIsLoggedIn(true);
            history.push('/');
          }
        })
        .catch(err => {
          setIsStatusPopupOpen(true);
          setErrorMessage(err.status);
        })
    }
  }
  //срабатывание проверки токена и автологина при загрузке страницы
  React.useEffect(() => {
    checkToken()
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header
          onSignOut={handleSignOut}
          email={email} />
        <Switch>
          <Route path='/sign-up'>
            <Register
              onRegister={handleRegister}
              isSubmitting={isSubmitting.register}
              serverRequestStatus={popupStatusMessage.errorType} />
          </Route>
          <Route path='/sign-in'>
            <Login
              onLogin={handleLogin}
              isSubmitting={isSubmitting.login}
              serverRequestStatus={popupStatusMessage.errorType} />
          </Route>
          <>
            <ProtectedRoute
              path='/'
              loggedIn={loggedIn}
              cards={cards}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={setCardForDeletion}
              isUserDataReceived={isUserDataReceived}
              component={Main} />
            <Route exact path='/'>
              <EditProfilePopup
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                onUpdateUser={handleUpdateUser}
                isSubmitting={isSubmitting.profile} />
              <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                onUpdateAvatar={handleUpdateAvatar}
                isSubmitting={isSubmitting.avatar} />
              <AddPlacePopup
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                onAddPlace={handleAddPlace}
                isSubmitting={isSubmitting.place} />
              <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups} />
              <PopupConfirmDeletion
                onClose={closeAllPopups}
                handleCardDelete={handleCardDelete}
                cardForDeletion={cardForDeletion}
                isSubmitting={isSubmitting.deletion} />
              <Footer />
            </Route>
          </>
        </Switch>
        <InfoTooltip
          isOpen={isStatusPopupOpen}
          onClose={closeAllPopups}
          popupStatusMessage={popupStatusMessage} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
