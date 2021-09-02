/*инициация всех попапов на странице*/
export const popupEdit = document.querySelector(".popup_edit");
export const popupNewCard = document.querySelector('.popup_new-card');
export const popupImage = document.querySelector('.popup_image');
export const placeImageScale = popupImage.querySelector('.popup__image');
export const placeImageScaleCaption = popupImage.querySelector('.popup__caption');


//обработка открытия popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', ClosePopupEsc);
}

//обработка закрытия popup
function closePopup(popup) {
 popup.classList.remove("popup_opened");
 
}

function ClosePopupEsc (evt) {
  if(evt.key === 'Escape') {
    closePopup();
  }
}

function ClosePopupOverlay (evt) {

}

export {openPopup, closePopup, ClosePopupEsc}
