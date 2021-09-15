/*Импорты наше все*/
//*****
import './index.css';
import {formsData, editButton, editButtonAvatar, addButton, popupCloseEdit,
  popupCloseNewCard, popupCloseEditAvatar, formEditProfileInfo,
  formAddNewPlace, formEditProfileAvatar} from '../utils/constants.js';
import {addCardSubmit, renderCards} from '../components/card.js';
import {enableValidation} from '../components/validate.js';
import {closePopup, openPopupEvent, } from '../components/modal.js';
import {popupEdit, popupNewCard, popupEditAvatar} from'../utils/constants.js';
import {getProfileInfo, getCardsDataToServer} from '../components/api.js';
import {setValueInputFormProfile, submitValueFormProfile, submitValueFormProfileAvatar,
  setUserData} from '../components/profile.js';

//***PROFILE

//Реализация открытия popup/form редактирования профиля
editButton.addEventListener('click', () =>{
  openPopupEvent(popupEdit);
});

//Реализация простого закрытия popup редактирования профиля
popupCloseEdit.addEventListener('click', () => {
  closePopup(popupEdit);
});

//Делаем сабмишн форме редактирования профиля
formEditProfileInfo.addEventListener('submit', submitValueFormProfile);

//***CARDS

//Реализация открытия popup/form добавления карточки
addButton.addEventListener('click', () => {
  openPopupEvent(popupNewCard);
  formAddNewPlace.reset();
});

//Реализация открытия popup смены аватарки
editButtonAvatar.addEventListener('click', () =>{
  openPopupEvent(popupEditAvatar);
  formEditProfileAvatar.reset();
})

popupCloseEditAvatar.addEventListener('click', ()=>{
  closePopup(popupEditAvatar);
})

//Реализация закрытия popup добавления карточки
popupCloseNewCard.addEventListener('click', () => {
  closePopup(popupNewCard);
});

/*Обозначаем контейнер, куда карточки могут добавляться*/
export const placesList = document.querySelector('.places__list');


/*Создаем новую карточку по событию submit*/
formAddNewPlace.addEventListener('submit', addCardSubmit);

/*Обновляем аву по событию submit*/
formEditProfileAvatar.addEventListener('submit', submitValueFormProfileAvatar)

/***** Все нужно валидировать, иначе нельзя
/*Валидируем все формы на странице*/
enableValidation(formsData);
//getProfileInfo();

Promise.all([getProfileInfo(), getCardsDataToServer()])
.then(([userData, cards]) => {
  setUserData(userData);
  setValueInputFormProfile(userData);
  const currentUserId = userData._id;
  const dataCards = cards;
  renderCards(dataCards, currentUserId);
})
.catch((err) =>{
  console.log(err);
})
