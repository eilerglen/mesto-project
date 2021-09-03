import {initialCards} from './components/initial-cards.js';
import {addCard} from './components/card.js';
import {enableValidation} from './components/validation.js';
import {FormsData} from './components/utils.js';
import {openPopup, closePopup, setEventPopup ,popupEdit, popupNewCard, popupImage} from './components/modal.js';


/*Кнопки закрытия попапов */
const popupCloseEdit = popupEdit.querySelector('.popup__close');
const popupCloseNewCard = popupNewCard.querySelector('.popup__close');
export const popupCloseImage = popupImage.querySelector('.popup__close');

/*Задаем переменные для DOM формы и полей создания карточки*/
const formAddNewPlace = popupNewCard.querySelector('.popup__form');
const  inputAddTitle = popupNewCard.querySelector('#place-name');
const  inputAddLink = popupNewCard.querySelector('#place-link');

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

const formEditProfileInfo = popupEdit.querySelector('.popup__form');
const inputEditProfileName = popupEdit.querySelector('#username');
const inputEditProfileProf = popupEdit.querySelector('#profession');

/*Редактируем новую карточку по событию submit */
function editFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = inputEditProfileName.value;
  profileProfession.textContent = inputEditProfileProf.value;
  closePopup(popupEdit);
}

formEditProfileInfo.addEventListener('submit', editFormSubmit);


/*Обозначаем контейнер, куда карточки могут добавляться*/
const placesList = document.querySelector('.places__list');
const templatePlace = document.querySelector('#template-place').content;


/*Отрисовываем все карточки из массива*/
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


/*Валидируем все формы на странице*/
enableValidation(FormsData);

/*Вызов функции закрытия popups по клавише Escape и щелчку вне тела popup*/
setEventPopup();

export {templatePlace};
