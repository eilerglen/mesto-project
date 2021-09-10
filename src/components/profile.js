import {profileName, profileProfession, profileAvatar} from '../utils/constants.js';
import {getProfileInfo} from '../components/api.js';

export function profileInfoUpdate () {
  getProfileInfo()
  .then((data) => {
    profileName.textContent = data.name;
    profileProfession.textContent = data.about;
    profileAvatar.src = data.avatar;
  })
}
