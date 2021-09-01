/*инициация всех попапов на странице*/
let popupEdit = document.querySelector(".popup_edit");
let popupNewCard = document.querySelector('.popup_new-card');
let popupImage = document.querySelector('.popup_image');
let placeImageScale = popupImage.querySelector('.popup__image');
let placeImageScaleCaption = popupImage.querySelector('.popup__caption');

/*Кнопки открытия попапов */
let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');
/*let imageButton = document.querySelector('.profile__add-button');*/

/*Кнопки закрытия попапов */
let popupCloseEdit = popupEdit.querySelector('.popup__close');
let popupCloseNewCard = popupNewCard.querySelector('.popup__close');
let popupCloseImage = popupImage.querySelector('.popup__close');

/*Задаем переменные для DOM формы и полей создания карточки*/

let formAddNewPlace = popupNewCard.querySelector('.popup__form');
let inputAddTitle = popupNewCard.querySelector('#place');
let inputAddLink = popupNewCard.querySelector('#link');

//обработка открытия popup
function openPopup(popup) {
  popup.classList.add('popup_opened')
}

//обработка закрытия popup
function closePopup(popup) {
 popup.classList.remove("popup_opened");
}

function handlerClosePopupEsc (evt) {
  if(evt.key = 'Escape') {

  }
}

//Открытие popup редактирования
editButton.addEventListener('click', () => {
  inputEditProfileName.value = profileName.textContent;
  inputEditProfileProf.value = profileProfession.textContent;
  openPopup(popupEdit);

});

//Открытие popup добавления формы
addButton.addEventListener('click', () => {
  openPopup(popupNewCard);
});


//Закрытие popup редактирования
popupCloseEdit.addEventListener('click', () => {
  closePopup(popupEdit)
});

//Закрытие popup добавления формы
popupCloseNewCard.addEventListener('click', () => {
  closePopup(popupNewCard)
});


/*Обработка сохранения данных формы редактирования профиля */
let profileName = document.querySelector('.profile__title');
let profileProfession = document.querySelector('.profile__subtitle');

let formEditProfileInfo = popupEdit.querySelector('.popup__form');
let inputEditProfileName = popupEdit.querySelector('#username');
let inputEditProfileProf = popupEdit.querySelector('#profession');



/*Функция редактирования профиля */
function editFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = inputEditProfileName.value;
  profileProfession.textContent = inputEditProfileProf.value;
  closePopup(popupEdit);

}

/* Вызываем функцию редактирования профиля как колбэке на обработчике формы*/
formEditProfileInfo.addEventListener('submit', editFormSubmit);

/*Обозначаем контейнер, куда карточки могут добавляться*/
const placesList = document.querySelector('.places__list');
let templatePlace = document.querySelector('#template-place').content;

/*Функция создания карточки*/
function createCard(data) {
  let placeItem = templatePlace.querySelector('.place').cloneNode(true);
  /*берем данные из словаря или формы для рендеринга контента карточки*/
  let placeImg = placeItem.querySelector('.place__img');
  let placeTitle = placeItem.querySelector('.place__title');
  placeImg.setAttribute('src', data.link);
  placeImg.setAttribute('alt', data.name);
  placeTitle.textContent = data.name;

 /*Вешаем обработчик на кнопку лайка. Здесь можно простой колбэк*/
  let placeIconLike = placeItem.querySelector('.place__icon');
  placeIconLike.addEventListener('click', function(evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle('place__icon_active');
  });

 /*Вешаем обработчик на удаление карточки. Здесь можно простой колбэк или запилить отдельную функцию*/
  let placeDeleteButton = placeItem.querySelector('.place__delete-button');

  placeDeleteButton.addEventListener('click', function() {
    let deletePlaceItem = placeDeleteButton.closest('.place');
    deletePlaceItem.remove();
  });
 //Открытие popup картинки
  placeImg.addEventListener('click', () => {
    placeImageScale.src = data.link;
    placeImageScale.alt = data.name;
    placeImageScaleCaption.textContent = data.name;
    openPopup(popupImage);



  });
  //Закрытие popup картинки
  popupCloseImage.addEventListener('click', () => {
  closePopup(popupImage)
  });

  return placeItem;
}

/*Функция добавления карточки на страницу*/
function addCard (data, container) {
  let place = createCard(data);
  container.prepend(place);
}


/*Вызов функции добавления карточек "из коробки на страницу" на страницу в цикле по массиву*/

initialCards.forEach((item) => {
  addCard(item, placesList)
});


/*Вызов функции создания новой карточки*/
function addFormSubmit (evt) {
  evt.preventDefault();
  addCard(data = {name: inputAddTitle.value, link: inputAddLink.value}, placesList)
  closePopup(popupNewCard);

}

formAddNewPlace.addEventListener('submit', addFormSubmit);

const obj = {
  formSelector:'.popup__form',
  inputSelector:'.popup__input',
  inputErrorClass: 'popup__input_type_error',
  submitButtonSelector: '.popup__button',
  inActiveButtonClass: 'popup__button_disabled',
  errorClass: '.popup__error_visible',
}

const hasInvalidInput = (inputs) => {
  return inputs.some((input) => {
      return !input.validity.valid
  });
} 

const toggleButtonState = (inputList,  buttonSubmit) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonSubmit.classList.add(obj.inActiveButtonClass);
    /*buttonSubmit.disabled = true;*/
  } else {
        // иначе сделай кнопку активной
        buttonSubmit.classList.remove(obj.inActiveButtonClass);
        buttonSubmit.disabled = false;
  }
}; 


function enableValidation({formSelector, inputSelector, submitButtonSelector, inputErrorClass, inActiveButtonClass, errorClass}) {
  const forms = Array.from(document.querySelectorAll(formSelector));
 
  forms.forEach(form => {
    form.addEventListener('submit', e => e.preventDefault());
    const buttonSubmit = form.querySelector(submitButtonSelector);
    const inputs = Array.from(form.querySelectorAll(inputSelector));
    toggleButtonState(inputs, buttonSubmit);
    inputs.forEach(input => {
      input.addEventListener('input', e => {
        if(!input.validity.valid) {
          input.classList.add(inputErrorClass);
          const errorPlace = document.querySelector(`.${input.id}-error`);
          errorPlace.textContent = input.validationMessage;
          errorPlace.classList.add(errorClass); 
        //** скрыть ошибку под полем*/
        } else {
          input.classList.remove(inputErrorClass);
          const errorPlace = document.querySelector(`.${input.id}-error`);
          errorPlace.textContent = '';
          errorPlace.classList.remove(errorClass)
         
         /*errorPlace.classListAdd(errorClass);*/
           //** показать ошибку под полем*/
         }
          
        toggleButtonState(inputs, buttonSubmit);
      })
    })
    
  });        // иначе сделай кнопку активной
}

enableValidation(obj);
