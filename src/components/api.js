const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-1",
  headers: {
    authorization: "8d680444-0d9e-44bb-bd3c-b716f51030e0",
    "Content-Type": "application/json",
  },
};

export function getProfileInfo(){
  return fetch(`${config.baseUrl}/users/me`,{
    method: "GET",
    headers: config.headers,
  })
    .then((res) => res.json())
    .catch((err) =>{
      console.log(err);
    })
}

function updateProfileInfo(name, profession) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      profession: profession,
  })
  .catch((err) =>{
      console.log(err);
    })
  })
}

function updateProfileAvatar(url) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
     avatar: url,
  })
  .catch((err) =>{
      console.log(err);
    })
  })
}

export function getInitialCards() {
  return fetch(`${config.baseUrl}/cards/`,{
    method: "GET",
    headers: config.headers,
  })
    .then((res) => res.json())
    .catch((err) =>{
      console.log(err);
    })
}
