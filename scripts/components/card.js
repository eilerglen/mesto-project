/*Экспортируем готовые функции*/
export {createCard, addCard};

/*Импортируем данные для создания фугкциональности*/
import {openPopup, closePopup, placeImageScale, placeImageScaleCaption, popupImage} from './modal.js'
import {popupCloseImage} from '../index.js';


/*Функция создания карточки*/
function createCard(data) {
    /*Обозначили темплейт тела карточки*/
    const templateCard = document.querySelector('#template-place').content;

    /*Клонировали разметку HTML*/
    const placeCardItem = templateCard.querySelector('.place').cloneNode(true);

    /*берем данные из словаря или формы для рендеринга контента карточки*/
    placeCardItem.querySelector('.place__img').src = data.link;
    placeCardItem.querySelector('.place__img').alt = data.name;
    placeCardItem.querySelector('.place__title').textContent = data.name;

   /*Вешаем обработчик на кнопку лайка.*/
    placeCardItem.querySelector('.place__icon').addEventListener('click', function(evt){
      const ev = evt.target;
      ev.classList.toggle('place__icon_active');

    })

   /*Вешаем обработчик на удаление карточки */
    placeCardItem.querySelector('.place__delete-button').addEventListener('click', function(evt){
      const card = evt.target.closest('.place');
      card.remove();
    })

   //Открытие popup картинки
    placeCardItem.querySelector('.place__img').addEventListener('click', () => {
      placeImageScale.src = data.link;
      placeImageScale.alt = data.name;
      placeImageScaleCaption.textContent = data.name;
      openPopup(popupImage);
    });

    //Закрытие popup картинки
    popupCloseImage.addEventListener('click', () => {
    closePopup(popupImage)
    });

    return placeCardItem;
  }


/*Функция добавления карточки в начало контейнера*/
  function addCard (data, container) {
    let place = createCard(data);
    container.prepend(place);
  }


