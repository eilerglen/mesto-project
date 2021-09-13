
/*Устанавливаем текущее состояние отображения данных о юзере на странице*/
import {profileName, profileProfession, profileAvatar} from '../utils/constants.js';
export function profileInfoUpdate (data) {
   {
    profileAvatar.src = data.avatar;
    profileName.textContent = data.name;
    profileProfession.textContent = data.about;
    
  }
}
