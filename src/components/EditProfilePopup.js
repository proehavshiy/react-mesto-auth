import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';
import { useFormWithValidation } from '../hooks/useFormWithValidation';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isSubmitting }) {

  const theme = 'white';

  //контроль инпутов и валидация
  const { values, setValues, handleChangeInput, errors, isValid, resetFrom } = useFormWithValidation();

  //подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    // if нужен для того, чтобы данные в инпутах сбрасывались в изначальное состояние только при открытии формы. так красивее
    if (isOpen) {
      resetFrom({ name: currentUser.name, signing: currentUser.about }, {}, false)
    }
  }, [currentUser, isOpen, resetFrom]);

  //обработчик формы
  function handleSubmit(evt) {
    evt.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик для отправки на сервер
    onUpdateUser({
      name: values.name,
      about: values.signing,
    });
  }

  return (
    <PopupWithForm
      name="change-profile"
      title="Редактировать профиль"
      submitText={isSubmitting ? 'Сохранить' : 'Сохранение...'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitButtonState={isValid}
      theme={theme}>
      <fieldset className="form__profile-information">
        <section className="form__input-section">
          <input className={`form__input form__input_theme_${theme} ${errors.name && 'form__input_error'}`} value={values.name || ''} onChange={handleChangeInput} type="text" name="name" placeholder="Имя" required minLength={2} maxLength={40} />
          <span className={`form__input-error ${errors.name && 'form__input-error_active'}`}>
            {errors.name}
          </span>
        </section>
        <section className="form__input-section">
          <input className={`form__input form__input_theme_${theme} ${errors.signing && 'form__input_error'}`} value={values.signing || ''} onChange={handleChangeInput} type="text" name="signing" placeholder="Подпись" required minLength={2} maxLength={200} />
          <span className={`form__input-error ${errors.signing && 'form__input-error_active'}`}>
            {errors.signing}
          </span>
        </section>
      </fieldset>
    </PopupWithForm>
  )

}

export default EditProfilePopup;
