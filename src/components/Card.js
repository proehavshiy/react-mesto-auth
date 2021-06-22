import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  //подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  //проверяем, наша ли карточка. нужен для добавнения кнопки удаления
  const isOwn = card.owner._id === currentUser._id;

  function handleClick() {
    onCardClick(card);
  }
  function handleLikeClick() {
    onCardLike(card);
  }
  function handleDeleteClick() {
    onCardDelete(card);
  }

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(item => {
    return item._id === currentUser._id;
  });

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `button-like_active`;

  return (
    <figure className="element">
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
      {isOwn && (
        <button className="element__button-delete page__button" type="button" aria-label="Удалить карточку" onClick={handleDeleteClick} />
      )}
      <figcaption className="element__figcaption">
        <h2 className="element__card-title">
          {card.name}
        </h2>
        <div className="element__like-section">
          <button className={`element__button-like page__button ${isLiked ? (cardLikeButtonClassName) : ('')}`} type="button" onClick={handleLikeClick} />
          <p className="element__like-counter">
            {card.likes.length}
          </p>
        </div>
      </figcaption>
    </figure>
  )
}

export default Card;


