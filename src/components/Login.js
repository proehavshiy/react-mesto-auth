import React from 'react';
import PageWithForm from './PageWithForm';
import { useFormWithValidation } from '../hooks/useFormWithValidation';

function Login({ onLogin, isSubmitting, serverRequestStatus }) {

  const theme = 'dark';

  //контроль инпутов и валидация
  const { values, setValues, handleChangeInput, errors, isValid, resetFrom } = useFormWithValidation();

  //обработчик формы
  function handleSubmit(evt) {
    evt.preventDefault();

    if (!values.email || !values.password) {
      return
    }

    onLogin(values.email, values.password)
  }

  React.useEffect(() => {
    //сбрасываем поля после отправки формы
    //if нужен для того, чтобы поля очищались только при успешном ответе сервера
    if (serverRequestStatus === 'success') {
      resetFrom();
    }
  }, [serverRequestStatus, resetFrom]);

  return (
    <PageWithForm
      name="login"
      title="Вход"
      submitText={isSubmitting ? 'Войти' : 'Вход...'}
      onSubmit={handleSubmit}
      submitButtonState={isValid}
      isRegister={false}
      theme={theme}>
      <fieldset className="form__profile-information form__profile-information_margin">
        <section className="form__input-section">
          <input className={`form__input form__input_theme_${theme} ${errors.email && 'form__input_error'}`} value={values.email || ''} onChange={handleChangeInput} type="email" name="email" placeholder="Email" required minLength={6} maxLength={30} />
          <span className={`form__input-error ${errors.email && 'form__input-error_active'}`}>
            {errors.email}
          </span>
        </section>
        <section className="form__input-section">
          <input className={`form__input form__input_theme_${theme} ${errors.password && 'form__input_error'}`} value={values.password || ''} onChange={handleChangeInput} type="password" name="password" placeholder="Пароль" required minLength={6} />
          <span className={`form__input-error ${errors.password && 'form__input-error_active'}`}>
            {errors.password}
          </span>
        </section>
      </fieldset>
    </PageWithForm>
  )
}

export default Login;
