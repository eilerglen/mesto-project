/*Окна модальные, попапы многострадальные */
import {popupList, popupEdit, popupImage, placeImageScale,
  placeImageScaleCaption, inputEditProfileName, inputEditProfileProf,
  inputEditProfileAvatar, profileName, profileProfession,
  popupEditAvatar, profileAvatar} from '../utils/constants.js';
import {updateProfileAvatar, updateProfileInfo} from '../components/api.js';
import {loadingStateRender} from '../components/utils.js';
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
    popupList.forEach((popup) => {
      closePopup(popup);
    });
  }
}

//Функция закрытия форм без сохранения

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
  updateProfileInfo(inputEditProfileName.value, inputEditProfileProf.value)
  .then((data) =>{
    profileName.textContent = data.name;
    profileProfession.textContent = data.about;
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() =>{
    loadingStateRender(popupEdit, true)
  })
  closePopup(popupEdit);
}
function submitValueFormProfileAvatar(evt) {
  evt.preventDefault();
  updateProfileAvatar(inputEditProfileAvatar.value)
  .then((res) => {
    profileAvatar.src = res.avatar;
  })

  .catch((err) => {
    console.log(err);
  })
  .finally(() =>{
    loadingStateRender(popupEditAvatar, true)
  });
  closePopup(popupEditAvatar);
}


/*Функция, в которой щелчок по карточке должен отобразить ее scaleImagePreview*/
function openImagePopup (src, alt, name) {
  placeImageScale.src = src;
  placeImageScale.alt = alt;
  placeImageScaleCaption.textContent = name;
  openPopupEvent(popupImage);
}

//Экспортируем готовые функции
export {closePopup, openImagePopup, openPopupEvent, setValueFormEditor,
  submitValueFormProfile, submitValueFormProfileAvatar}
