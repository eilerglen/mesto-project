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

function createCard(data) {

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

    placeCardItem.querySelector('.place__delete-button').addEventListener('click', removeCardItem);
    
  
    //placeCardItem.querySelector('.place__delete-button').classList.add(".place__delete-button_active")
   

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

/*Функция добавления карточки в начало контейнера*/
  function addCard (data, container) {
    const place = createCard(data);
    container.prepend(place);
  }

/*Функция извлечения данных карточки из сервера*/
  export const extractData = (cardStorageServer) => {
    let objExctract = {
      carTitle: cardStorageServer.name,
      cardSrc: cardStorageServer.link,
      cardId: cardStorageServer._id,
    }
    return objExctract;

  }

 /*Функция удалить карточку*/
 function removeCardItem (evt) {
  const carditem = evt.target.closest('.place');
  carditem.remove()
}
