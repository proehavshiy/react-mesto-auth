import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import Card from './Card';

function Main({ cards, onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete }) {
  //подписка на контекст
  const { name, about, avatar } = React.useContext(CurrentUserContext);

  return (
    <main className="content page__block-alignment page__main">
      <section className="profile page__section page__animation page__profile">
        <div className="profile__avatar avatar-form-open-button" style={{ backgroundImage: `url(${avatar})` }} onClick={onEditAvatar} />
        <div className="profile__info">
          <h1 className="profile__title">
            {name}
          </h1>
          <button className="profile__change-button page__button profile-form-open-button" onClick={onEditProfile} type="button" aria-label="Кнопка Редактировать профиль" />
          <p className="profile__subtitle">
            {about || ''}
          </p>
        </div>
        <button className="profile__add-button page__button add-card-form-open-button" onClick={onAddPlace} type="button" aria-label="Кнопка Добавить карточку" />
      </section>
      <section className="elements page__section page__animation">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} />
        )
        )}
      </section>
    </main>
  )
}
export default Main;