/*Экспортируем готовые функции*/
export {createCard, addCard, addCardSubmit, renderCards};

/*Импортируем данные для создания функциональности*/
import {openImagePopup, closePopup} from './modal.js'
import {popupImage, inputAddTitle, inputAddLink, popupNewCard} from '../utils/constants.js'
import {popupCloseImage} from '../utils/constants.js'
import {cardLikeToggle} from './utils.js';
import {addNewCard, likeCard, dislikeCard} from './api.js'
import {placesList} from '../pages/index.js'
/*Функция создания карточки*/

function createCard(data, userId) {

    /*Обозначили темплейт тела карточки*/
    const templateCard = document.querySelector('#template-place').content;

    /*Клонировали разметку HTML и обозначили, что нужно return этой функции*/
    const placeCardItem = templateCard.querySelector('.place').cloneNode(true);
  
    /*Устанавливаем конфиг для рендеринга контента карточки из словаря*/
    placeCardItem.querySelector('.place__img').src = data.link;
    placeCardItem.querySelector('.place__img').alt = data.name;
    placeCardItem.querySelector('.place__title').textContent = data.name;
    placeCardItem.setAttribute("id", data._id);
    placeCardItem.querySelector('.place__count-like').textContent = data.likes.length;
    if(!(data.owner._id === userId))  {
      placeCardItem.querySelector('.place__delete-button').style.display = "none";
    }
    else {
      placeCardItem.querySelector('.place__delete-button').addEventListener('click', removeCardItem);
    }

    const isLiked = defineCurrentUserLike(data, userId);
    if(isLiked) {
      placeCardItem.querySelector('.place__icon').classList.add('.place__icon_active');
      dislikeCard(data._id).then((res) => {
        console.log(res);
      })

    }

    else { placeCardItem.querySelector('.place__icon').classList.remove('.place__icon_active')}
      likeCard(data._id).then((res) => {
      console.log(res);
    })
   
    /*Карточка нуждается в оценке, поэтому вешаем обработчик на кнопку лайка*/
    
   placeCardItem.querySelector('.place__icon').addEventListener('click', cardLikeToggle)

    
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

  function defineCurrentUserLike(arrLikes, currentId) {
    arrLikes.likes.filter((item) => { return item._id === currentId; }).length > 0;
  }

/*Функция добавления карточки в начало контейнера*/
  function addCard (data, container, userId) {
    const place = createCard(data, userId);
    container.prepend(place);
  }
/*Функция-обработчик формы создания новой карточки*/
  function addCardSubmit (evt) {
    evt.preventDefault();
    const cardData = {
      name: inputAddTitle.value,
      link: inputAddLink.value,
    }

    addNewCard({name: cardData.name, link: cardData.link})
    .then((data) => {
      addCard(data, placesList)
    })
    
    closePopup(popupNewCard);
  }

  /*Функция рендеринга карточки по массиву данных из сервера*/
  function renderCards(arrayCards, userId){
    arrayCards.forEach((card) =>{
        addCard (card, placesList, userId);
      })
  }

 /*Функция удалить карточку*/

 function removeCardItem (evt) {
  const carditem = evt.target.closest('.place');
  carditem.remove()
}


