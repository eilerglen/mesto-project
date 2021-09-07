export { initialCards, formsData, popupList, popupEdit, popupNewCard, popupImage, placeImageScale,
  placeImageScaleCaption, inputEditProfileName, inputEditProfileProf,  profileName, profileProfession}

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

const formsData = {
  formSelector:'.popup__form',
  inputSelector:'.popup__input',
  inputErrorClass: 'popup__input_type_error',
  submitButtonSelector: '.popup__button',
  inActiveButtonClass: 'popup__button_disabled',
  errorClass: '.popup__error_visible',
}

/*Экспортируем нужные данные, чтобы хоть один попап открылся */
const popupList = document.querySelectorAll('.popup');
const popupEdit = document.querySelector(".popup_edit");
const popupNewCard = document.querySelector('.popup_new-card');
const popupImage = document.querySelector('.popup_image');
const placeImageScale = popupImage.querySelector('.popup__image');
const placeImageScaleCaption = popupImage.querySelector('.popup__caption');

/*переменные для полей редактирования профиля */
const inputEditProfileName = popupEdit.querySelector('#username');
const inputEditProfileProf = popupEdit.querySelector('#profession');
const profileName = document.querySelector('.profile__title');
const profileProfession = document.querySelector('.profile__subtitle');

