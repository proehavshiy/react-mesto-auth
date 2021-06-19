import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace, isSubmitting }) {

  const theme = 'white';

  const [input, setInput] = React.useState({
    location: {
      value: '',
      valid: false,
      errorMessage: ''
    },
    link: {
      value: '',
      valid: false,
      errorMessage: ''
    }
  });

  const submitButtonState = !input.location.valid || !input.link.valid ? false : true;
  const submitButtonText = isSubmitting ? 'Сохранить' : 'Добавление...';

  const inputTextErrorClass = input.location.errorMessage ? 'form__input_error' : '';
  const inputTextErrorCaption = input.location.errorMessage ? 'form__input-error_active' : '';
  const TextErrorMessage = input.location.errorMessage;

  const inputLinkErrorClass = input.link.errorMessage ? 'form__input_error' : '';
  const inputLinkErrorCaption = input.link.errorMessage ? 'form__input-error_active' : '';
  const LinkErrorMessage = input.link.errorMessage;

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

  //обработчик формы
  function handleAddPlaceSubmit(evt) {
    evt.preventDefault();

    onAddPlace({
      name: input.location.value,
      link: input.link.value
    })
  }

  React.useEffect(() => {
    //сбрасываем поля после отправки формы
    //if нужен для того, чтобы в момент ожидания ответа от сервера
    //кнопка не дизейблилась, и данные инпутов не очищались. так некрасиво
    if (isSubmitting === true) {
      setInput({
        location: {
          value: '',
          valid: false,
          errorMessage: ''
        },
        link: {
          value: '',
          valid: false,
          errorMessage: ''
        }
      });
    }
  }, [isSubmitting]);

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      submitText={submitButtonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleAddPlaceSubmit}
      submitButtonState={submitButtonState}
      theme={theme}>
      <fieldset className="form__profile-information">
        <section className="form__input-section">
          <input className={`form__input form__input_theme_${theme} ${inputTextErrorClass}`} value={input.location ? input.location.value : ''} onChange={handleUserInput} type="text" name="location" placeholder="Название" required minLength={2} maxLength={30} />
          <span className={`form__input-error ${inputTextErrorCaption}`}>
            {TextErrorMessage}
          </span>
        </section>
        <section className="form__input-section">
          <input className={`form__input form__input_theme_${theme} ${inputLinkErrorClass}`} value={input.link ? input.link.value : ''} onChange={handleUserInput} type="url" name="link" placeholder="Ссылка на картинку" required />
          <span className={`form__input-error ${inputLinkErrorCaption}`}>
            {LinkErrorMessage}
          </span>
        </section>
      </fieldset>
    </PopupWithForm>
  )
}

export default AddPlacePopup;

/*
//для сброса значений при закрытии формы. Зависимость от defaultForm
  // потому что если от isOpen, я не могу добавить карточку. Данные стейтов очищаются раньше, чем отправка происходит
  //приходится 2 раза сбрасывать
  //стейт для сброса полей формы к начальному состоянию
  const [defaultForm, setDefaultForm] = React.useState(false);
  //React.useEffect(()=> {
  //  setInputText('')
  //  setInputLink('')
  //  setDefaultForm(false)
  //},[defaultForm]);
*/
