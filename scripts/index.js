import {initialCards} from './components/initial-cards.js';
import {createCard} from './components/card.js';
import {enableValidation} from './components/validation.js';
import {FormsData} from './components/utils.js';
import {openPopup, closePopup, popupEdit, popupNewCard, popupImage} from './components/modal.js';


/*Кнопки закрытия попапов */
const popupCloseEdit = popupEdit.querySelector('.popup__close');
const popupCloseNewCard = popupNewCard.querySelector('.popup__close');
export const popupCloseImage = popupImage.querySelector('.popup__close');

/*Задаем переменные для DOM формы и полей создания карточки*/
let formAddNewPlace = popupNewCard.querySelector('.popup__form');
let inputAddTitle = popupNewCard.querySelector('#place-name');
let inputAddLink = popupNewCard.querySelector('#place-link');

/*Кнопки открытия попапов */
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

//Открытие popup редактирования
editButton.addEventListener('click', () => {
  inputEditProfileName.value = profileName.textContent;
  inputEditProfileProf.value = profileProfession.textContent;
  openPopup(popupEdit);

});

//Закрытие popup редактирования
popupCloseEdit.addEventListener('click', () => {
  closePopup(popupEdit)
});

//Открытие popup добавления формы
addButton.addEventListener('click', () => {
  openPopup(popupNewCard);
});

//Закрытие popup добавления формы
popupCloseNewCard.addEventListener('click', () => {
  closePopup(popupNewCard)
});

/*Обработка сохранения данных формы редактирования профиля */
const profileName = document.querySelector('.profile__title');
const profileProfession = document.querySelector('.profile__subtitle');

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
const templatePlace = document.querySelector('#template-place').content;

/*Добавить карточку*/
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
  addCard({name: inputAddTitle.value, link: inputAddLink.value}, placesList);
  closePopup(popupNewCard);

}

formAddNewPlace.addEventListener('submit', addFormSubmit);

enableValidation(FormsData);

export {templatePlace};
