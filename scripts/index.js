/*Импорты наше все*/
//*****

import {initialCards} from './components/initial-cards.js';
import {addCard} from './components/card.js';
import {enableValidation} from './components/validation.js';
import {FormsData} from './components/utils.js';
import {openPopup, closePopup, setEventPopup ,popupEdit, popupNewCard, popupImage} from './components/modal.js';

/*Инициализация кнопочек для закрытия/открытия попапов*/
// *****

/*Кнопки открытия попапов */
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

/*Кнопки закрытия попапов */
const popupCloseEdit = popupEdit.querySelector('.popup__close');
const popupCloseNewCard = popupNewCard.querySelector('.popup__close');
export const popupCloseImage = popupImage.querySelector('.popup__close');

//***** 

/*Задаем переменные для DOM формы и полей создания карточки*/

/*Задаем данные формы создания карточки*/
const formAddNewPlace = popupNewCard.querySelector('.popup__form');
/*Задаем инпуты для названия и ссылки*/
const  inputAddTitle = popupNewCard.querySelector('#place-name');
const  inputAddLink = popupNewCard.querySelector('#place-link');



//Реализация открытия popup редактирования
editButton.addEventListener('click', () => {
  inputEditProfileName.value = profileName.textContent;
  inputEditProfileProf.value = profileProfession.textContent;
  openPopup(popupEdit);

});

//Реализация закрытия popup редактирования
popupCloseEdit.addEventListener('click', () => {
  closePopup(popupEdit)
});

//Реализация открытия popup добавления формы
addButton.addEventListener('click', () => {
  openPopup(popupNewCard);
});

//Реализация закрытия popup добавления формы
popupCloseNewCard.addEventListener('click', () => {
  closePopup(popupNewCard)
});


/*Обработка сохранения данных формы редактирования профиля */
const profileName = document.querySelector('.profile__title');
const profileProfession = document.querySelector('.profile__subtitle');

const formEditProfileInfo = popupEdit.querySelector('.popup__form');
const inputEditProfileName = popupEdit.querySelector('#username');
const inputEditProfileProf = popupEdit.querySelector('#profession');

/*Редактируем профиль по событию submit */
function editFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = inputEditProfileName.value;
  profileProfession.textContent = inputEditProfileProf.value;
  closePopup(popupEdit);
}

formEditProfileInfo.addEventListener('submit', editFormSubmit);

//***** 

/*Собственно, карточки*/

/*Обозначаем контейнер, куда карточки могут добавляться*/
const placesList = document.querySelector('.places__list');

/*Отрисовываем все карточки из массива на странице в обозначенный контейнер*/
initialCards.forEach((item) => {
  addCard(item, placesList)
});

/*Создаем новую карточку по событию submit*/
function addFormSubmit (evt) {
  evt.preventDefault();
  addCard({name: inputAddTitle.value, link: inputAddLink.value}, placesList);
  closePopup(popupNewCard);
}

formAddNewPlace.addEventListener('submit', addFormSubmit);

/***** Все нужно валидировать, иначе нельзя
 * 
/*Валидируем все формы на странице*/
enableValidation(FormsData);

/*Вызов функции закрытия popups по клавише Escape и щелчку вне тела popup*/
setEventPopup();

