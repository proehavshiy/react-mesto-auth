import React from 'react';
import Popup from './Popup';

function PopupWithForm({ name, title, submitText, isOpen, onClose, onSubmit, submitButtonState, theme, children }) {

  return (
    <Popup
      name={name}
      isOpen={isOpen}
      onClose={onClose}>
      <form className={`form form_theme_${theme}`} onSubmit={onSubmit} name={`${name}-form`} noValidate autoComplete="off">
        <h2 className="form__heading">
          {title}
        </h2>
        {children}
        <button className={`page__button form__button-save form__button-save_theme_${theme}`} disabled={!submitButtonState} type="submit" value="Отправить на сервер" aria-label="Кнопка Сохранить форму">
          {submitText}
        </button>
      </form>
    </Popup>
  )
}

export default PopupWithForm;
