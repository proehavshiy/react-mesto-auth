import React from 'react';
import PopupWithForm from './PopupWithForm';
import { useFormWithValidation } from '../hooks/useFormWithValidation';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isSubmitting }) {

  const theme = 'white';

  //контроль инпутов и валидация
  const { values, setValues, handleChangeInput, errors, isValid, resetFrom } = useFormWithValidation();

  //обработчик формы
  function handleSubmit(evt) {
    evt.preventDefault();

    // Передаём новый url во внешний обработчик для отправки на сервер
    onUpdateAvatar({
      avatar: values.link
    });
  }

  React.useEffect(() => {
    // if нужен для того, чтобы данные в инпутах сбрасывались в изначальное состояние только при открытии формы. так красивее
    if (isOpen) {
      resetFrom();
    }
  }, [isOpen, resetFrom]);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      submitText={isSubmitting ? 'Сохранить' : 'Сохранение...'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitButtonState={isValid}
      theme={theme}>
      <fieldset className="form__profile-information">
        <section className="form__input-section">
          <input className={`form__input form__input_theme_${theme} ${errors.link && 'form__input_error'}`} value={values.link || ''} onChange={handleChangeInput} type="url" name="link" placeholder="Ссылка на картинку" required />
          <span className={`form__input-error ${errors.link && 'form__input-error_active'}`}>
            {errors.link}
          </span>
        </section>
      </fieldset>
    </PopupWithForm>

  )
}

export default EditAvatarPopup;