class FormValidator {
  constructor(form, ...inputs) {
    this._form = form;
    this.inputs = inputs;
    this._inputList = Array.from(this.inputs); //массив всех инпутов из формы
    this._buttonElement = this._form.querySelector('.popup__button-save'); //submit кнопка формы
    //bind
    this._checkInputValidityBind = this._checkInputValidity.bind(this);
    this.toggleButtonStateBind = this.toggleButtonState.bind(this);
  }
  enableValidation() {
    this._setEventListeners();
  }
  //публичный метод для очистки ошибок в полях форм при открытии формы по кнопке
  hideInputErrors() {
    this._inputList.forEach(_inputElement => {
      this._hideInputError(_inputElement);
    })
  }
  _setEventListeners() {
    //лисенер на каждый инпут формы
    this._inputList.forEach(_inputElement => {
      _inputElement.addEventListener('input', () => {
        this._checkInputValidityBind(_inputElement); //проверка валидности инпута
        this.toggleButtonStateBind(); //переключение состояния кнопки в завис от валидности
      })
    })
  }
  _checkInputValidity(_inputElement) {
    if (!_inputElement.validity.valid) {//в зависимости от валидности поля показываем или прячем сообщение об ошибке
      this._showInputError(_inputElement);
    } else {
      this._hideInputError(_inputElement);
    }
  }
  _showInputError(_inputElement) {
    const _errorMessage = _inputElement.validationMessage;
    //находим span ошибки
    const _errorElement = this._form.querySelector(`.${'popup__input-error_type_'}${_inputElement.name}`);
    //добавляем содержание ошибки
    _errorElement.textContent = _errorMessage;
    //добавляем класс ошибки инпуту
    _inputElement.classList.add('popup__input_error');
    //добавляем класс появления
    _errorElement.classList.add('popup__input-error_active');
  }
  _hideInputError(_inputElement) {
    //находим span ошибки
    const _errorElement = this._form.querySelector(`.${'popup__input-error_type_'}${_inputElement.name}`);
    //очищаем текст ошибки
    _errorElement.textContent = '';
    //удаляем класс ошибки инпуту
    _inputElement.classList.remove('popup__input_error');
    _errorElement.classList.remove('popup__input-error_active');
  }
  toggleButtonState() {
    //ищем хотя бы 1 невалидный инпут
    const _hasNotValidInput = this._inputList.some(_inputElement => {
      return !_inputElement.validity.valid
    });
    //в зависимости от валидности полей переключаем кнопку
    if (_hasNotValidInput) {
      this._buttonElement.setAttribute('disabled', true);
      this._buttonElement.classList.add('popup__button-save_disabled');
    } else {
      this._buttonElement.removeAttribute('disabled');
      this._buttonElement.classList.remove('popup__button-save_disabled');
    }
  }
}

export default FormValidator;
