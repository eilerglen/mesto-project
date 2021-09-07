/*Окна модальные, попапы многострадальные */
import {popupList, popupEdit, popupImage, placeImageScale,
  placeImageScaleCaption, inputEditProfileName, inputEditProfileProf,
  profileName, profileProfession} from '../utils/constants.js';

//Функция открытия popup и одевания слушателей по ESC и клику по области вне тела

function openPopupEvent(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keyup', closePopupEsc);
  popup.addEventListener('click', closePopupOverlay);
}

//Функция закрытия popup  и снятия слушателей
function closePopup(popup) {
  popup.classList.remove("popup_opened")
  document.removeEventListener('keyup', closePopupEsc);
  popup.removeEventListener('click', closePopupOverlay);
 }

//Функция закрытия popup по клавише ESC
const closePopupEsc = (evt) => {
  if(evt.key === "Escape") {
    popupList.forEach((elem) => {
      closePopup(elem);
    });
  }
}

//Функция открытия popup по оверлею
const closePopupOverlay = (evt) => {
  if(evt.target.classList.contains('popup')) {
    popupList.forEach((elem) => {
      closePopup(elem);
    });
  }
}
//Инициализация значений полей и открытия popup редактирования
function setValueFormEditor () {
  inputEditProfileName.value = profileName.textContent;
  inputEditProfileProf.value = profileProfession.textContent;
  openPopupEvent(popupEdit);

};
//Раз уж начали popup редактирования юзать, значить надо засабмитить, таков путь
function submitValueFormProfile (evt) {
  evt.preventDefault();
  profileName.textContent = inputEditProfileName.value;
  profileProfession.textContent = inputEditProfileProf.value;
  closePopup(popupEdit);
}

/*Функция, в которой щелчок по карточке должен отобразить ее scaleImagePreview*/
function openImagePopup (src, alt, name) {
  placeImageScale.src = src;
  placeImageScale.alt = alt;
  placeImageScaleCaption.textContent = name;
  openPopupEvent(popupImage);
}

//Экспортируем готовые функции
export {closePopup, openImagePopup, openPopupEvent, setValueFormEditor, submitValueFormProfile}
