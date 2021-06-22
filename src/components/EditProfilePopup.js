import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isSubmitting }) {

  const theme = 'white';

  //подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  //стейт-переменная для управляемых компонентов формы
  const [input, setInput] = React.useState({
    name: {
      value: '',
      valid: true,
      errorMessage: ''
    },
    signing: {
      value: '',
      valid: true,
      errorMessage: ''
    }
  });

  const submitButtonState = !input.name.valid || !input.signing.valid ? false : true;
  const submitButtonText = isSubmitting ? 'Сохранить' : 'Сохранение...';

  const inputNameErrorClass = input.name.errorMessage ? 'form__input_error' : '';
  const inputNameErrorCaption = input.name.errorMessage ? 'form__input-error_active' : '';
  const nameErrorMessage = input.name.errorMessage;

  const inputSigningErrorClass = input.signing.errorMessage ? 'form__input_error' : '';
  const inputSigningErrorCaption = input.signing.errorMessage ? 'form__input-error_active' : '';
  const signingErrorMessage = input.signing.errorMessage;

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    // if нужен для того, чтобы данные в инпутах сбрасывались в изначальное состояние только при открытии формы. так красивее
    if (isOpen) {
      setInput(prevState => ({
        ...prevState,
        name: {
          value: currentUser.name,
          valid: true,
          errorMessage: ''
        },
        signing: {
          value: currentUser.about,
          valid: true,
          errorMessage: ''
        }
      })
      );
    }
  }, [currentUser, isOpen]);

  //обработчик формы
  function handleSubmit(evt) {
    evt.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name: input.name.value,
      about: input.signing.value,
    });
  }

  //обработчик инпутов
  function handleUserInput({ target }) {
    const { name, value, validity: { valid }, validationMessage } = target;

    setInput(prevState => ({
      ...prevState,
      [name]: {
        value,
        valid,
        errorMessage: validationMessage
      }
    }))
  }

  return (
    <PopupWithForm
      name="change-profile"
      title="Редактировать профиль"
      submitText={submitButtonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitButtonState={submitButtonState}
      theme={theme}>
      <fieldset className="form__profile-information">
        <section className="form__input-section">
          <input className={`form__input form__input_theme_${theme} ${inputNameErrorClass}`} value={input.name ? input.name.value : ''} onChange={handleUserInput} type="text" name="name" placeholder="Имя" required minLength={2} maxLength={40} />
          <span className={`form__input-error ${inputNameErrorCaption}`}>
            {nameErrorMessage}
          </span>
        </section>
        <section className="form__input-section">
          <input className={`form__input form__input_theme_${theme} ${inputSigningErrorClass}`} value={input.signing ? input.signing.value : ''} onChange={handleUserInput} type="text" name="signing" placeholder="Подпись" required minLength={2} maxLength={200} />
          <span className={`form__input-error ${inputSigningErrorCaption}`}>
            {signingErrorMessage}
          </span>
        </section>
      </fieldset>
    </PopupWithForm>
  )

}

export default EditProfilePopup;
