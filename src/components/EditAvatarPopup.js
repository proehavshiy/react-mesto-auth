import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isSubmitting }) {

  const theme = 'white';

  const [inputLink, setInputLink] = React.useState({});

  const submitButtonState = !inputLink.value || !inputLink.value || !inputLink.valid || !inputLink.valid ? false : true;
  const submitButtonText = isSubmitting ? 'Сохранить' : 'Сохранение...';

  const inputLinkErrorClass = inputLink.errorMessage ? 'form__input_error' : '';
  const inputLinkErrorCaption = inputLink.errorMessage ? 'form__input-error_active' : '';

  //обработчик формы
  function handleSubmit(evt) {
    evt.preventDefault();

    // Передаём новый url во внешний обработчик
    onUpdateAvatar({
      avatar: inputLink.value
    });
  }

  React.useEffect(() => {
    // if нужен для того, чтобы данные в инпутах сбрасывались в изначальное состояние только при открытии формы. так красивее
    if (isOpen) {
      setInputLink({
        value: '',
        valid: true,
        errorMessage: ''
      })
    }
  }, [isOpen]);

  //обработчик инпутов
  function handleUserInput({ target }) {
    const { value, validity: { valid }, validationMessage } = target;

    setInputLink({
      value,
      valid,
      errorMessage: validationMessage
    })
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      submitText={submitButtonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitButtonState={submitButtonState}
      theme={theme}>
      <fieldset className="form__profile-information">
        <section className="form__input-section">
          <input className={`form__input form__input_theme_${theme} ${inputLinkErrorClass}`} value={inputLink.value || ''} onChange={handleUserInput} type="url" name="image-link" placeholder="Ссылка на картинку" required />
          <span className={`form__input-error ${inputLinkErrorCaption}`}>
            {inputLink.errorMessage}
          </span>
        </section>
      </fieldset>
    </PopupWithForm>

  )
}

export default EditAvatarPopup;

/*
//валидация инпутов
  function handleChange(evt){
    setLink(evt.target.value)

    //вызов валидации
    handleCheckInputValidity(evt.target);
  }
  const [link, setLink] = React.useState('');
  const [isValidInput, setIsValidInput] = React.useState({
    name: '',
    status: ''
  });
  const [errorMessage, setErrorMessage] = React.useState('');
  const [submitButton, setSubmitButton] = React.useState('');
  const toggleInput = isValidInput.status ? ('popup__input_error'):('');
  const toggleError = isValidInput.status ? ('popup__input-error_active'):('');
  const toggleMessage = isValidInput.status && errorMessage;

  //проверка валидности
  function handleCheckInputValidity(input) {
    if (!input.validity.valid) {
      //если валидный
      setIsValidInput({
        name: input.name,
        status: true
      });
      setErrorMessage(input.validationMessage);
      setSubmitButton(true)
    } else {
      //если невалидный
      setIsValidInput({
        name: input.name,
        status: false
      });
      setErrorMessage('');
      setSubmitButton(false)
    }
  }
  //сброс ошибок при закрытии поля
  function resetValidation() {
    setIsValidInput({
      name: '',
      status: true
    });
    setErrorMessage('');
  }
*/
