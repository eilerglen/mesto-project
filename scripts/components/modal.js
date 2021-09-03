/*Экспортируем нужные данные */
export const popupEdit = document.querySelector(".popup_edit");
export const popupNewCard = document.querySelector('.popup_new-card');
export const popupImage = document.querySelector('.popup_image');
export const placeImageScale = popupImage.querySelector('.popup__image');
export const placeImageScaleCaption = popupImage.querySelector('.popup__caption');

//Функция открытия popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', (evt)=>{
    if (evt.key === 'Escape') {
        closePopup(popup);
    }
  });
}

//Функция закрытия popup
function closePopup(popup) {
 popup.classList.remove("popup_opened");
 document.removeEventListener('keyup', (evt)=>{
  if (evt.key === 'Escape') {
      closePopup(popup);
  }
});
}

//Функция закрытия popup по щелчку вне тела popup

function setEventPopup() {
  const popups = Array.from(document.querySelectorAll(".popup"));
  popups.forEach(popup => {
    popup.addEventListener('click', (evt)=>{
      if (evt.target.classList.contains('popup')) {
          closePopup(popup);
      }
    });

  });

}

//Экспортируем готовые функции
export {openPopup, closePopup, setEventPopup }
