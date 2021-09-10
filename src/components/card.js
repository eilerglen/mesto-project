/*Экспортируем готовые функции*/
export {createCard, addCard};

/*Импортируем данные для создания функциональности*/
import {openImagePopup, closePopup} from './modal.js'
import {popupImage} from '../utils/constants.js'
import {popupCloseImage} from '../utils/constants.js'
import {cardLikeToggle} from './utils.js';
import {getCardsData, getProfileInfo} from './api.js'
import {placesList} from '../pages/index.js'
/*Функция создания карточки*/

function createCard(data, removeFlag) {
    /*Обозначили темплейт тела карточки*/
    const templateCard = document.querySelector('#template-place').content;

    /*Клонировали разметку HTML и обозначили, что нужно return этой функции*/
    const placeCardItem = templateCard.querySelector('.place').cloneNode(true);

    /*Устанавливаем конфиг для рендеринга контента карточки из словаря*/
    placeCardItem.querySelector('.place__img').src = data.link;
    placeCardItem.querySelector('.place__img').alt = data.name;
    placeCardItem.querySelector('.place__title').textContent = data.name;
    placeCardItem.setAttribute("id", data.cardId)

   /*Карточка нуждается в оценке, поэтому вешаем обработчик на кнопку лайка*/
    placeCardItem.querySelector('.place__icon').addEventListener('click', cardLikeToggle)

    if(removeFlag) {
      placeCardItem.querySelector('.place__delete-button').addEventListener('click', removeCardItem);
    }
    else {
      placeCardItem.querySelector('.place__delete-button').classList.add(".place__delete-button_active")
    }

   /*Щелчок по карточке должен отобразить ее scaleImagePreview*/
    placeCardItem.querySelector('.place__img').addEventListener('click', () => {
    openImagePopup(data.link, data.name, data.name)
  });

    //Закрытие popup картинки
    popupCloseImage.addEventListener('click', () => {
    closePopup(popupImage)
    });


    return placeCardItem;
  }
//Разделяй и властвуй. Функции формирующие функцию создания карточки
  export function getInitialsCards(){
    getCardsData()
    .then((arrayCard) => {
      arrayCard.forEach(cardElem => {
         let tempDataCard = {
           cardTitle: cardElem.name,
           cardSrc: cardElem.link,
           cardId: cardElem._id,
         }
         let cmpId;
         getProfileInfo()
         .then((profile) => {
            cmpId = profile._id;
         })
        let place;
         if(cmpId === cardElem.owner._id) {
          place = createCard(tempDataCard, true)
         }
         else place = createCard(tempDataCard, false)
         placesList.prepend(place);
      });
    })
    })
  }

/*Функция добавления карточки в начало контейнера*/
  function addCard (data, container) {
    const place = createCard(data, removeFlag);
    container.prepend(place);
  }


 /*Функция удалить карточку*/
 function removeCardItem (evt) {
  const carditem = evt.target.closest('.place');
  carditem.remove()
}
