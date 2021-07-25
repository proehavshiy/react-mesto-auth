import React from 'react';
import PopupWithForm from './PopupWithForm';
import { useFormWithValidation } from '../hooks/useFormWithValidation';

function AddPlacePopup({ isOpen, onClose, onAddPlace, isSubmitting }) {

  const theme = 'white';

  //контроль инпутов и валидация
  const { values, setValues, handleChangeInput, errors, isValid, resetFrom } = useFormWithValidation();

  //обработчик формы
  function handleAddPlaceSubmit(evt) {
    evt.preventDefault();

    onAddPlace({
      name: values.location,
      link: values.link
    })
  }

  React.useEffect(() => {
    //сбрасываем поля при закрытии формы
    if (isOpen) {
      resetFrom();
    }
  }, [isOpen, resetFrom]);

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      submitText={isSubmitting ? 'Сохранить' : 'Добавление...'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleAddPlaceSubmit}
      submitButtonState={isValid}
      theme={theme}>
      <fieldset className="form__profile-information">
        <section className="form__input-section">
          <input className={`form__input form__input_theme_${theme} ${errors.location && 'form__input_error'}`} value={values.location || ''} onChange={handleChangeInput} type="text" name="location" placeholder="Название" required minLength={2} maxLength={30} />
          <span className={`form__input-error ${errors.location && 'form__input-error_active'}`}>
            {errors.location}
          </span>
        </section>
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

export default AddPlacePopup;

/*
//для сброса значений при закрытии формы. Зависимость от defaultForm
  // потому что если от isOpen, я не могу добавить карточку. Данные стейтов очищаются раньше, чем отправка происходит
  //приходится 2 раза сбрасывать
  //стейт для сброса полей формы к начальному состоянию
  const [defaultForm, setDefaultForm] = React.useState(false);
  //React.useEffect(()=> {
  //  setInputText('')
  //  setInputLink('')
  //  setDefaultForm(false)
  //},[defaultForm]);
*/
