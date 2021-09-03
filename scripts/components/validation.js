//Функция-селектор отображения/скрытия браузерных сообщений об ошибке,но стилизованных red-цветом
const checkInputValidity = (formElement, inputElement, DataForm) => {
  if(!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, DataForm);
  }
  else {
    hideInputError(formElement, inputElement, DataForm);
  }
}
/*Функция простой проверки на валидность хотя бы одного поля формы*/

const hasInvalidInput = (inputs) => {
  return inputs.some((input) => {
      return !input.validity.valid
  });
}
const toggleButtonState = (inputList, buttonSubmit, DataForm) => {  
  if (hasInvalidInput(inputList)) {
    buttonSubmit.classList.add(DataForm.inActiveButtonClass);
    buttonSubmit.disabled = true;
  } else {
      buttonSubmit.classList.remove(DataForm.inActiveButtonClass);
      buttonSubmit.disabled = false;
  }
} 
//Функция показа браузерных сообщений об ошибке и только 
const showInputError = (formElement, inputElement, errorMessage, DataForm) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  errorElement.textContent = errorMessage;
  inputElement.classList.add(DataForm.inputErrorClass);
  errorElement.classList.add(DataForm.errorClass);
}
//Функция сокрытия браузерных сообщений об ошибке и только 
const hideInputError = (formElement, inputElement, DataForm) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(DataForm.inputErrorClass);
  errorElement.classList.remove(DataForm.errorClass);
  errorElement.textContent = '';
}

//Функция где по каждому полю input при вводе запускаются функции показа или сокрытия браузерных сообщений об ошибке и активности/пассивности кнопки
const setEventListeners = (formElement, DataForm) => {
  const inputList = Array.from(formElement.querySelectorAll(DataForm.inputSelector));
  const buttonSubmit = formElement.querySelector(DataForm.submitButtonSelector);

  toggleButtonState(inputList, buttonSubmit, DataForm);

  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', e => {
      checkInputValidity(formElement, inputElement, DataForm)
      toggleButtonState(inputList, buttonSubmit, DataForm);
    })
  })

}

//Главная функция - запуск валидации форм
export function enableValidation(DataForm) {
  const forms = Array.from(document.querySelectorAll(DataForm.formSelector));
  forms.forEach(form => {
    form.addEventListener('submit', e => e.preventDefault());
    setEventListeners(form,DataForm);
  });
}


