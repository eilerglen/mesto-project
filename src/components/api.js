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
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) =>{
      console.log(err);
    })
}

export const getCardsDataToServer = () => {
  return fetch(`${config.baseUrl}/cards/`,{
    method: "GET",
    headers: config.headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

    })
    .catch((err) => {
      console.log(err);
    });
}

export function getProfileAll(){
  return fetch(`${config.baseUrl}/users/`,{
    method: "GET",
    headers: config.headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) =>{
      console.log(err);
    })
}

export function updateProfileInfo(name, about) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    })
  })
}

export function updateProfileAvatar(url) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: url,
    })
  })
}



export function addNewCard(data) {
  return fetch(`${config.baseUrl}/cards/`,{
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: data.name,
      link: data.link,
    })
  })
}

export function dropCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`,{
    method: 'DELETE',
    headers: config.headers,
  }).then((res) =>{
    if(res.ok){
      return res.json();
    }
  })
}

export const likeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })

    .catch((err) => {
      console.log(err);
    });
};

export const dislikeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
