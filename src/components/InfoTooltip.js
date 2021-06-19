import React from 'react';
import { useHistory } from 'react-router-dom';

import Popup from './Popup';

function InfoTooltip({ isOpen, onClose, popupStatusMessage }) {

  //const theme = 'dark';

  const history = useHistory();
  const checkout = popupStatusMessage.errorType === 'success'
  const image = checkout ? 'popup__image-status_type_success' : 'popup__image-status_type_reject'
  function handleClose() {
    onClose()
    //редиректим хуком на страницу логина при успешной регистрации
    checkout && history.push('/sign-in')
  }
  return (
    <Popup
      name="status"
      isOpen={isOpen}
      onClose={handleClose}>
      <div className="popup__status">
        <div className={`popup__image-status ${image}`}></div>
        <h2 className="popup__heading popup__heading_status">
          {popupStatusMessage.errorText}
        </h2>
      </div>
    </Popup>
  )
}

export default InfoTooltip;
