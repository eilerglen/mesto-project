import {profileName, profileProfession, profileAvatar} from '../utils/constants.js';
export function profileInfoUpdate (data) {
   {
    profileName.textContent = data.name;
    profileProfession.textContent = data.about;
    profileAvatar.src = data.avatar;
  }
}


