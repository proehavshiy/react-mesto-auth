import React, { useCallback } from 'react';

//кастомный хук по управляемой валидации инпутов
export function useFormWithValidation() {
  //хранилище инпут-значение
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  //управлятор инпутами:
  //заполняет хранилище
  const handleChangeInput = useCallback(
    (evt) => {
      const input = evt.target;
      const name = input.name;
      const value = input.value;
      const error = input.validationMessage;
      const isFormValid = input.closest('form').checkValidity();

      //записываем поле-значение
      setValues(prevState => ({
        ...prevState,
        [name]: value
      }));
      //записываем ошибки
      setErrors(prevState => ({
        ...prevState,
        [name]: error
      }));
      //записываем валидность формы
      setIsValid(isFormValid);
    }, [setValues]
  )

  //сброс ошибок
  const resetFrom = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, setValues, handleChangeInput, errors, isValid, resetFrom }
}

