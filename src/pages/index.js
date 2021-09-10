/*Импорты наше все*/
//*****
import './index.css';
import {initialCards, formsData, editButton, editButtonAvatar, addButton, popupCloseEdit,
  popupCloseNewCard, popupCloseEditAvatar, inputAddTitle, inputAddLink, formEditProfileInfo,
  formAddNewPlace, formEditProfileAvatar} from '../utils/constants.js';
import {getInitialsCards, extractData,addCard} from '../components/card.js';
import {enableValidation,resetValidation} from '../components/validate.js';
import {closePopup, openPopupEvent, setValueFormEditor, submitValueFormProfile,
  submitValueFormProfileAvatar} from '../components/modal.js';
import {popupEdit, popupNewCard, popupEditAvatar} from'../utils/constants.js';
import {getProfileInfo, getCardsDataToServer} from '../components/api.js';
import {profileInfoUpdate} from '../components/profile.js';

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

//Реализация открытия popup смены аватарки
editButtonAvatar.addEventListener('click', () =>{
  openPopupEvent(popupEditAvatar);
  resetValidation(popupEditAvatar);
})

popupCloseEditAvatar.addEventListener('click', ()=>{
  formEditProfileAvatar.reset();
  closePopup(popupEditAvatar);
})

//Реализация закрытия popup добавления карточки
popupCloseNewCard.addEventListener('click', () => {
  formAddNewPlace.reset();
  closePopup(popupNewCard);
});

/*Обозначаем контейнер, куда карточки могут добавляться*/
export const placesList = document.querySelector('.places__list');

/*Отрисовываем все карточки из массива на странице в обозначенный контейнер*/
getCardsDataToServer()
  .then((arrayCards) => {
    console.log(arrayCards)
    arrayCards.forEach((card) =>{
      console.log(card);
      addCard (card, placesList);
    })
  });

/*Функция создания карточки по клику*/

function addCardSubmit (evt) {
  evt.preventDefault();
  addCard({name: inputAddTitle.value, link: inputAddLink.value}, placesList)
  closePopup(popupNewCard);
}

/*Создаем новую карточку по событию submit*/
formAddNewPlace.addEventListener('submit', addCardSubmit);

/*Обновляем аву по событию submit*/
formEditProfileAvatar.addEventListener('submit', submitValueFormProfileAvatar)

/***** Все нужно валидировать, иначе нельзя
/*Валидируем все формы на странице*/
enableValidation(formsData);
//getProfileInfo();

getProfileInfo();
profileInfoUpdate();

