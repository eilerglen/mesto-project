/*Окна модальные, попапы многострадальные */

/*Экспортируем нужные данные, чтобы хоть один попап открылся */
export const popupEdit = document.querySelector(".popup_edit");
export const popupNewCard = document.querySelector('.popup_new-card');
export const popupImage = document.querySelector('.popup_image');
export const placeImageScale = popupImage.querySelector('.popup__image');
export const placeImageScaleCaption = popupImage.querySelector('.popup__caption');

/*переменные для полей редактирования профиля */
const inputEditProfileName = popupEdit.querySelector('#username');
const inputEditProfileProf = popupEdit.querySelector('#profession');
const profileName = document.querySelector('.profile__title');
const profileProfession = document.querySelector('.profile__subtitle');


//Функция открытия popup для всех случаев
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
  document.removeEventListener('keyup', popup);
 }

//Функция открытия popup для формы редактирования профиля

//Инициализация значений полей и открытия popup редактирования
function setValueFormEditor () {
  inputEditProfileName.value = profileName.textContent;
  inputEditProfileProf.value = profileProfession.textContent;
  openPopup(popupEdit);

};
//Раз уж начали popup редактирования юзать, значить надо засабмитить, таков путь
function submitValueForm (evt) {
  evt.preventDefault();
  profileName.textContent = inputEditProfileName.value;
  profileProfession.textContent = inputEditProfileProf.value;
  closePopup(popupEdit);
}

/*Функция, в которой щелчок по карточке должен отобразить ее scaleImagePreview :))*/
function openImagePopup (src, alt, name) {
  placeImageScale.src = src;
  placeImageScale.alt = alt;
  placeImageScaleCaption.textContent = name;
  openPopup(popupImage);
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
export {openPopup, closePopup, openImagePopup, setEventPopup, setValueFormEditor, submitValueForm}
