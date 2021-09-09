export { initialCards, formsData, popupList, popupEdit, popupNewCard, popupImage,
  popupEditAvatar, placeImageScale, placeImageScaleCaption, inputEditProfileName,
  inputEditProfileProf, inputEditProfileAvatar, profileName, profileProfession,
  profileAvatar, editButton, editButtonAvatar, popupCloseEdit, popupCloseEditAvatar,
  inputAddTitle, inputAddLink, formEditProfileInfo, formEditProfileAvatar, formAddNewPlace,
  addButton, popupCloseNewCard, popupCloseImage}

/*Массив карточек из коробки */
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
/*Данные для валидации форм */
const formsData = {
  formSelector:'.popup__form',
  inputSelector:'.popup__input',
  inputErrorClass: 'popup__input_type_error',
  submitButtonSelector: '.popup__button',
  inActiveButtonClass: 'popup__button_disabled',
  errorClass: '.popup__error_visible',
}

/*Экспортируем нужные данные, чтобы хоть один попап открылся */

/*Popups*/
const popupList = document.querySelectorAll('.popup');
const popupEdit = document.querySelector(".popup_edit");
const popupNewCard = document.querySelector('.popup_new-card');
const popupImage = document.querySelector('.popup_image');
const popupEditAvatar = document.querySelector('.popup_edit-avatar');
/*Popup__image*/
const placeImageScale = popupImage.querySelector('.popup__image');
const placeImageScaleCaption = popupImage.querySelector('.popup__caption');

/*переменные для полей редактирования профиля */
const inputEditProfileName = popupEdit.querySelector('#username');
const inputEditProfileProf = popupEdit.querySelector('#profession');
const profileName = document.querySelector('.profile__title');
const profileProfession = document.querySelector('.profile__subtitle');

/*переменные для полей редактирования профиля */
const inputEditProfileAvatar = popupEditAvatar.querySelector('#avatar-link');
const profileAvatar = document.querySelector('.profile__avatar');

/*Кнопки управления popup/формой редактирования профиля и авы*/
const editButton = document.querySelector('.profile__edit-button');
const editButtonAvatar = document.querySelector('.profile__avatar-edit');
const popupCloseEdit = popupEdit.querySelector('.popup__close');
const popupCloseEditAvatar = popupEditAvatar.querySelector('.popup__close');

/*Задаем инпуты для названия и ссылки для карточки*/
const  inputAddTitle = popupNewCard.querySelector('#place-name');
const  inputAddLink = popupNewCard.querySelector('#place-link');

//Нашли форму редактирования профиля
const formEditProfileInfo = popupEdit.querySelector('.popup__form');
//Нашли форму редактирования профиля
const formEditProfileAvatar = popupEditAvatar.querySelector('.popup__form');
/*Задаем форму создания карточки*/
const formAddNewPlace = popupNewCard.querySelector('.popup__form');
/*Кнопки управления popup/формой добавления карточки */
const addButton = document.querySelector('.profile__add-button');
const popupCloseNewCard = popupNewCard.querySelector('.popup__close');
const popupCloseImage = popupImage.querySelector('.popup__close');
