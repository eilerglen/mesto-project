//Функция-селектор отображения/скрытия браузерных сообщений об ошибке,но стилизованных red-цветом
const checkInputValidity = (formElement, inputElement, dataForm) => {
  if(!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, dataForm);
  }
  else {
    hideInputError(formElement, inputElement, dataForm);
  }
}
/*Функция простой проверки на валидность хотя бы одного поля формы*/

const hasInvalidInput = (inputs) => {
  return inputs.some((input) => {
    return !input.validity.valid
  });
}
const toggleButtonState = (inputList, buttonSubmit, dataForm) => {
  if (hasInvalidInput(inputList)) {
    buttonSubmit.classList.add(dataForm.inActiveButtonClass);
    buttonSubmit.disabled = true;
  } else {
      buttonSubmit.classList.remove(dataForm.inActiveButtonClass);
      buttonSubmit.disabled = false;
  }
}
//Функция показа браузерных сообщений об ошибке и только
const showInputError = (formElement, inputElement, errorMessage, dataForm) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  errorElement.textContent = errorMessage;
  inputElement.classList.add(dataForm.inputErrorClass);
  errorElement.classList.add(dataForm.errorClass);
}
//Функция сокрытия браузерных сообщений об ошибке и только
const hideInputError = (formElement, inputElement, dataForm) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(dataForm.inputErrorClass);
  errorElement.classList.remove(dataForm.errorClass);
  errorElement.textContent = '';
}

//Функция где по каждому полю input при вводе запускаются функции показа или сокрытия браузерных сообщений об ошибке и активности/пассивности кнопки
const setEventListeners = (formElement, dataForm) => {
  const inputList = Array.from(formElement.querySelectorAll(dataForm.inputSelector));
  const buttonSubmit = formElement.querySelector(dataForm.submitButtonSelector);
  toggleButtonState(inputList, buttonSubmit, dataForm);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, dataForm);
      toggleButtonState(inputList, buttonSubmit, dataForm);
    })
  })

}

//Главная функция - запуск валидации форм
export function enableValidation(dataForm) {
  const forms = Array.from(document.querySelectorAll(dataForm.formSelector));
  forms.forEach((form) => {
    form.addEventListener('submit', e => e.preventDefault());
    setEventListeners(form, dataForm);
  });
}

//Сброс красной линии при невалидных данных
function resetInputErr(popup) {
  const inputList = Array.from(popup.querySelectorAll('.popup__input'));
  inputList.forEach((input) => {
      input.classList.remove('popup__input_type_error');
  })
}

//Сброс сообщения о невалидности значения ввода
function resetSpanErr(popup) {
  const errorElementList = popup.querySelectorAll('.popup__error');
  errorElementList.forEach((errorElement)=> {
      errorElement.classList.remove('popup__error_visible');
      errorElement.textContent = "";
  })
}

//Сброс ошибок валидации форм
export function resetValidation(popup) {
  resetSpanErr(popup)
  resetInputErr(popup)
}


