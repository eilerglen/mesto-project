/*Импорты наше все*/
//*****
import './index.css';
import {initialCards} from '../components/initial-cards.js';
import {addCard} from '../components/card.js';
import {enableValidation} from '../components/validation.js';
import {FormsData} from '../components/utils.js';
import {openPopup, closePopup, setEventPopup ,popupEdit, popupNewCard, popupImage, setValueFormEditor, submitValueForm} from '../components/modal.js';

/*Инициализация кнопочек управления функционалом сайта*/
// *****

/*Кнопки управления popup/формой редактирования профиля */
const editButton = document.querySelector('.profile__edit-button');
const popupCloseEdit = popupEdit.querySelector('.popup__close');
//Нашли форму редактирования профиля
const formEditProfileInfo = popupEdit.querySelector('.popup__form');

/*****/

/*Кнопки управления popup/формой добавления картчоки */
const addButton = document.querySelector('.profile__add-button');
const popupCloseNewCard = popupNewCard.querySelector('.popup__close');
export const popupCloseImage = popupImage.querySelector('.popup__close');
/*Задаем форму создания карточки*/
const formAddNewPlace = popupNewCard.querySelector('.popup__form');

//***** 

/*Задаем инпуты для названия и ссылки для карточки*/
const  inputAddTitle = popupNewCard.querySelector('#place-name');
const  inputAddLink = popupNewCard.querySelector('#place-link');

//***PROFILE

//Реализация открытия popup/form редактирования профиля
editButton.addEventListener('click', setValueFormEditor)

//Реализация простого закрытия popup редактирования профиля
popupCloseEdit.addEventListener('click', () => {
  formEditProfileInfo.reset();
  closePopup(popupEdit)
});

//Делаем сабмишн форме редактирования профиля
formEditProfileInfo.addEventListener('submit', submitValueForm);

//***ARDS

//Реализация открытия popup/form добавления карточки
addButton.addEventListener('click', () => {
  openPopup(popupNewCard);
});

//Реализация закрытия popup добавления карточки
popupCloseNewCard.addEventListener('click', () => {
  formAddNewPlace.reset()
  closePopup(popupNewCard)
});

/*Обозначаем контейнер, куда карточки могут добавляться*/
const placesList = document.querySelector('.places__list');

/*Отрисовываем все карточки из массива на странице в обозначенный контейнер*/
initialCards.forEach((item) => {
  addCard(item, placesList)
});

/*Функция создания карточки по клику*/

function addCardSubmit (evt) {
  evt.preventDefault();
  addCard(data = {name: inputAddTitle.value, link: inputAddLink.value}, placesList)
  closePopup(popupNewCard);

}
/*Создаем новую карточку по событию submit*/
formAddNewPlace.addEventListener('submit', addCardSubmit);

/***** Все нужно валидировать, иначе нельзя

/*Валидируем все формы на странице*/
enableValidation(FormsData);

/*Вызов функции закрытия popups по клавише Escape и щелчку вне тела popup*/
setEventPopup();

