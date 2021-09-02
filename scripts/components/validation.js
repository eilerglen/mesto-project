
const checkInputValidity = (formElement, inputElement, DataForm) => {
  if(!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, DataForm);
  }
  else {
    hideInputError(formElement, inputElement, DataForm);
  }
}

const hasInvalidInput = (inputs) => {
  return inputs.some((input) => {
      return !input.validity.valid
  });
}

const toggleButtonState = (inputList, buttonSubmit, DataForm) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonSubmit.classList.add(DataForm.inActiveButtonClass);
    /*buttonSubmit.disabled = true;*/
  } else {
        // иначе сделай кнопку активной
        buttonSubmit.classList.remove(DataForm.inActiveButtonClass);
        buttonSubmit.disabled = false;
  }
};

const showInputError = (formElement, inputElement, errorMessage, DataForm) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  errorElement.textContent = errorMessage;
  inputElement.classList.add(DataForm.inputErrorClass);
  errorElement.classList.add(DataForm.errorClass);
}

const hideInputError = (formElement, inputElement, DataForm) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(DataForm.inputErrorClass);
  errorElement.classList.remove(DataForm.errorClass);
  errorElement.textContent = '';
}


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

export function enableValidation(DataForm) {
  const forms = Array.from(document.querySelectorAll(DataForm.formSelector));
  forms.forEach(form => {
    form.addEventListener('submit', e => e.preventDefault());
    setEventListeners(form,DataForm);
  });
}


