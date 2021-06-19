import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupConfirmDeletion({ onClose, handleCardDelete, cardForDeletion, isSubmitting }) {

  const theme = 'white';

  const submitButtonText = isSubmitting ? 'Да' : 'Удаление...';

  function handleSubmit(evt) {
    evt.preventDefault();

    handleCardDelete(cardForDeletion)
  }
  return (
    <PopupWithForm
      name="confirm-deletion"
      title="Вы уверены?"
      submitText={submitButtonText}
      isOpen={cardForDeletion} //целый объект перекидываю для true/false результата/ работает но мб память лишнюю жрет такой способ
      onClose={onClose}
      onSubmit={handleSubmit}
      submitButtonState={cardForDeletion}
      theme={theme} />
  )
}

export default PopupConfirmDeletion;
