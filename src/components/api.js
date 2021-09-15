const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-1",
  headers: {
    authorization: "8d680444-0d9e-44bb-bd3c-b716f51030e0",
    "Content-Type": "application/json",
  },
};

const getResponseData = (res) => {
 if(res.ok) {
   return res.json();
 }
 return Promise.reject(`Ошибка: ${res.status}`);
}

export function getProfileInfo(){
  return fetch(`${config.baseUrl}/users/me`,{
    method: "GET",
    headers: config.headers,
  })
    .then(getResponseData);
}

export const getCardsDataToServer = () => {
  return fetch(`${config.baseUrl}/cards/`,{
    method: "GET",
    headers: config.headers,
  })
  .then(getResponseData);
}

export function updateProfileInfo(name, about) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    })
  }) .then(getResponseData);
}

export function updateProfileAvatar(url) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: url,
    })
  }).then(getResponseData);
}



export function addNewCard(data) {
  return fetch(`${config.baseUrl}/cards/`,{
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: data.name,
      link: data.link,
    })
  }).then(getResponseData);
}

export function dropCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`,{
    method: 'DELETE',
    headers: config.headers,
  }).then(getResponseData);
}

export const likeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  })
  .then(getResponseData);
};

export const dislikeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  })
  .then(getResponseData);
};
