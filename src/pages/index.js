/*Импорты наше все*/
//*****
import './index.css';
import {initialCards, formsData, editButton, addButton, popupCloseEdit, popupCloseNewCard,
  inputAddTitle, inputAddLink, formEditProfileInfo, formAddNewPlace} from '../utils/constants.js';
import {addCard} from '../components/card.js';
import {enableValidation,resetValidation} from '../components/validate.js';
import {closePopup, openPopupEvent, setValueFormEditor, submitValueFormProfile} from '../components/modal.js';
import {popupEdit, popupNewCard} from'../utils/constants.js';

//***PROFILE

//Реализация открытия popup/form редактирования профиля
editButton.addEventListener('click', setValueFormEditor)

//Реализация простого закрытия popup редактирования профиля
popupCloseEdit.addEventListener('click', () => {
  closePopup(popupEdit);
  formEditProfileInfo.reset();
  resetValidation(popupEdit);
});

//Делаем сабмишн форме редактирования профиля
formEditProfileInfo.addEventListener('submit', submitValueFormProfile);

//***CARDS

//Реализация открытия popup/form добавления карточки
addButton.addEventListener('click', () => {
  openPopupEvent(popupNewCard);
  resetValidation(popupNewCard);
});

//Реализация закрытия popup добавления карточки
popupCloseNewCard.addEventListener('click', () => {
  formAddNewPlace.reset();
  closePopup(popupNewCard);
});

/*Обозначаем контейнер, куда карточки могут добавляться*/
const placesList = document.querySelector('.places__list');

/*Отрисовываем все карточки из массива на странице в обозначенный контейнер*/
initialCards.forEach((item) => {
  addCard(item, placesList);
});

/*Функция создания карточки по клику*/

function addCardSubmit (evt) {
  evt.preventDefault();
  addCard({name: inputAddTitle.value, link: inputAddLink.value}, placesList)
  closePopup(popupNewCard);

}
/*Создаем новую карточку по событию submit*/
formAddNewPlace.addEventListener('submit', addCardSubmit);

/***** Все нужно валидировать, иначе нельзя

/*Валидируем все формы на странице*/
enableValidation(formsData);


