
/*Устанавливаем текущее состояние отображения данных о юзере на странице*/
import {profileName, profileProfession, profileAvatar, popupEdit, inputEditProfileName,
  inputEditProfileProf, inputEditProfileAvatar, popupEditAvatar, formEditProfileInfo,
  formEditProfileAvatar} from '../utils/constants.js';
import {loadingStateRender} from '../components/utils.js';
import {closePopup} from '../components/modal.js';
import {updateProfileInfo, updateProfileAvatar} from '../components/api.js';
//Инициализация значений полей и открытия popup редактирования
const setUserData = (data) => {
  profileName.textContent = data.name;
  profileProfession.textContent = data.about;
  profileAvatar.src = data.avatar;
}

//Предзаполнение полей ввода формы редактирования профиля данными из сервера
const setValueInputFormProfile = (data) => {
  inputEditProfileName.value = data.name;
  inputEditProfileProf.value = data.about;
}
//Сохраняем данные из полей ввода формы редактирования профиля на сервер
function submitValueFormProfile (evt) {
  evt.preventDefault();
  // Меняем контекст кнопки сабмита
  loadingStateRender(popupEdit, true);
  updateProfileInfo(inputEditProfileName.value, inputEditProfileProf.value)
  .then((data) => {
    setUserData(data);
    closePopup(popupEdit);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() =>{
    loadingStateRender(popupEdit, false);
  })
}

//Сохраняем данные из полей ввода формы смены аватара на сервер
function submitValueFormProfileAvatar(evt) {
  evt.preventDefault();
  loadingStateRender(popupEditAvatar, true);
  updateProfileAvatar(inputEditProfileAvatar.value)
  .then((data) => {
      profileAvatar.src = data.avatar;
      formEditProfileAvatar.reset();
    closePopup(popupEditAvatar);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    loadingStateRender(popupEditAvatar, false);
  });
}

export {setValueInputFormProfile, submitValueFormProfile, submitValueFormProfileAvatar,
  setUserData}
