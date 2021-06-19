import React from 'react';

function Popup({ name, isOpen, onClose, children }) {
  const togglePopupState = isOpen ? 'popup__flexed popup_opened' : 'popup__flexed';

  //закрытие по крестику, по клику вне формы
  function handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
      onClose()
    }
  }
  function handleButtonClose(evt) {
    if (evt.target === evt.currentTarget) {
      onClose()
    }
  }

  //закрытие по Esc попапов
  React.useEffect(() => {
    if (!isOpen) return;

    const handleEscapeClose = (evt) => {
      if (evt.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keyup', handleEscapeClose);
    return () => {
      document.removeEventListener('keyup', handleEscapeClose);
    }
  }, [isOpen, onClose]);


  return (
    <div className={`popup popup_${name} ${togglePopupState}`} onClick={handleOverlayClose}>
      <div className={`popup__container popup__container_${name}`}>
        <button className={`page__button page__button_type_close popup__button-close`} onClick={handleButtonClose} aria-label="Кнопка Закрыть" type="button" />
        {children}
      </div>
    </div>
  )
}

export default Popup;
