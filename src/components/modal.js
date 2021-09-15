/*Окна модальные, попапы многострадальные */
import {popupList, popupImage, placeImageScale, placeImageScaleCaption, formsData} from '../utils/constants.js';
import {resetValidation} from '../components/validate.js';
//Функция открытия popup и одевания слушателей по ESC и клику по области вне тела
function openPopupEvent(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keyup', closePopupEsc);
  popup.addEventListener('click', closePopupOverlay);

}

//Функция закрытия popup и снятия слушателей
function closePopup(popup) {
  popup.classList.remove("popup_opened")
  document.removeEventListener('keyup', closePopupEsc);
  popup.removeEventListener('click', closePopupOverlay);
  resetValidation(popup, formsData);
 }

//Функция закрытия popup по клавише ESC
const closePopupEsc = (evt) => {
  if(evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

//Функция открытия popup по оверлею
const closePopupOverlay = (evt) => {
  if(evt.target.classList.contains('popup')) {
  closePopup(evt.target);
  }
}

/*Функция, в которой щелчок по карточке должен отобразить ее scaleImagePreview_popup*/
function openImagePopup (src, alt, name) {
  placeImageScale.src = src;
  placeImageScale.alt = alt;
  placeImageScaleCaption.textContent = name;
  openPopupEvent(popupImage);
}

//Экспортируем готовые функции
export {closePopup, openImagePopup, openPopupEvent}
