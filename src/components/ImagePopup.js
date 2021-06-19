import React from 'react';
import Popup from './Popup';

function ImagePopup({ card, onClose }) {

  return (
    <Popup
      name='open-image'
      isOpen={card}
      onClose={onClose}>
      <figure className="popup__figure">
        <img className="popup__image" src={card ? card.link : ''} alt={card ? `картинка: ${card.name}` : ''} />
        <figcaption className="popup__figcaption">
          {card ? card.name : ''}
        </figcaption>
      </figure>
    </Popup>
  )
}
export default ImagePopup;
