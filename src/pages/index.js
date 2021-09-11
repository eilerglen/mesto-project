/*Импорты наше все*/
//*****
import './index.css';
import {initialCards, formsData, editButton, editButtonAvatar, addButton, popupCloseEdit,
  popupCloseNewCard, popupCloseEditAvatar, formEditProfileInfo,
  formAddNewPlace, formEditProfileAvatar} from '../utils/constants.js';
import {addCard, addCardSubmit, renderCards} from '../components/card.js';
import {enableValidation,resetValidation} from '../components/validate.js';
import {closePopup, openPopupEvent, setValueFormEditor, submitValueFormProfile,
  submitValueFormProfileAvatar} from '../components/modal.js';
import {popupEdit, popupNewCard, popupEditAvatar} from'../utils/constants.js';
import {getProfileInfo, getCardsDataToServer, getProfileAll} from '../components/api.js';
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


/*Создаем новую карточку по событию submit*/
formAddNewPlace.addEventListener('submit', addCardSubmit);

/*Обновляем аву по событию submit*/
formEditProfileAvatar.addEventListener('submit', submitValueFormProfileAvatar)

/***** Все нужно валидировать, иначе нельзя
/*Валидируем все формы на странице*/
enableValidation(formsData);
//getProfileInfo();
getProfileAll();

Promise.all([getProfileInfo(), getCardsDataToServer()])
.then((res) => {
  const dataProfile = res[0];
  const currentUserId = res[0]._id;
  console.log(currentUserId);
  const dataCards = res[1];
  console.log( dataCards)
  profileInfoUpdate(dataProfile);
  renderCards(dataCards, currentUserId);
  console.log(renderCards);
})
