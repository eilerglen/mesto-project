/*Экспортируем готовые функции*/
export {createCard, addCard};

/*Импортируем данные для создания функциональности*/
import {OpenImagePopup, closePopup,  popupImage} from './modal.js'
import {popupCloseImage} from '../index.js';


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

   /*Карточка нуждается в оценке, поэтому вешаем обработчик на кнопку лайка*/
    placeCardItem.querySelector('.place__icon').addEventListener('click', cardLikeToggle)
    
   /*Иногда карточку приходится удалять*/
    placeCardItem.querySelector('.place__delete-button').addEventListener('click', removeCardItem);
    
   /*Щелчок по карточке должен отобразить ее scaleImagePreview*/
    placeCardItem.querySelector('.place__img').addEventListener('click', () => {
    OpenImagePopup(data.link, data.name, data.name)
  });

    //Закрытие popup картинки
    popupCloseImage.addEventListener('click', () => {
    closePopup(popupImage)
    });


    return placeCardItem;
  }

  //Разделяй и властвуй. Функции формирующие функцию создания карточки

  /*Функция поставить/убрать лайк*/
  function cardLikeToggle (evt) {
    const e = evt.target;
    e.classList.toggle('place__icon_active');
  }
  
  /*Функция удалить карточку*/
  function removeCardItem (evt) {
    const carditem = evt.target.closest('.place');
    carditem.remove()
  }


/*Функция добавления карточки в начало контейнера*/
  function addCard (data, container) {
    let place = createCard(data);
    container.prepend(place);
  }


