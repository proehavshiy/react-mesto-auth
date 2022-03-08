class Api {
  constructor({ serverUrl, cohort, token, }) {
    this._serverUrl = serverUrl;
    this._cohort = cohort;
    this._token = token;
  }

  //проверка метода
  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка ${response.status}`)
  }
  //запрос информации профиля с сервера
  getUserInfo() {
    return fetch(`${this._serverUrl}/${this._cohort}/users/me`, {
      headers: {
        authorization: this._token
      }
    }).then(this._checkResponse);
  }
  //запрос карточек с сервера
  getCards() {
    return fetch(`${this._serverUrl}/${this._cohort}/cards`, {
      headers: {
        authorization: this._token
      }
    }).then(this._checkResponse);
  }
  //отправка на сервер новых данных пользователя
  //Метод PATCH обычно используют для обновления сущностей, уже существующих на сервере
  sendUserInfo({ name, about }) {
    return fetch(`${this._serverUrl}/${this._cohort}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then(this._checkResponse);
  }
  //добавление новой карточки на сервер
  sendNewCard({ name, link }) {
    return fetch(`${this._serverUrl}/${this._cohort}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name, //название карточки
        link: link //ссылка на картинку
      })
    })
      .then(this._checkResponse);
  }
  //добавление новой карточки на сервер
  deleteCard(cardId) {
    //{ name, link },
    return fetch(`${this._serverUrl}/${this._cohort}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        //name: name, //название карточки
        //link: link, //ссылка на картинку
        _id: cardId
      })
    })
      .then(this._checkResponse);
  }

  //Обновление аватара пользователя
  sendUserAvatar({ avatar }) {
    return fetch(`${this._serverUrl}/${this._cohort}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then(this._checkResponse);
  }

  changeLikeCardStatus(cardID, like) {
    return fetch(`${this._serverUrl}/${this._cohort}/cards/likes/${cardID}`, {
      method: like ? 'PUT' : 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cardID: cardID,
        like: like
      })
    })
      .then(this._checkResponse)
  }

}

const api = new Api({
  serverUrl: 'https://mesto.nomoreparties.co/v1',
  cohort: 'cohort-24',
  token: 'edb7481a-fcf7-4397-94a7-daeb2327e95b'
})

export default api;
