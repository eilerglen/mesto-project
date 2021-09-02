/*Функция создания карточки*/
export {createCard};

import {openPopup, closePopup, placeImageScale, placeImageScaleCaption, popupImage} from './modal.js'
import {templatePlace} from '../index.js';
import {popupCloseImage} from '../index.js';

function createCard(data) {
    const placeItem = templatePlace.querySelector('.place').cloneNode(true);
    /*берем данные из словаря или формы для рендеринга контента карточки*/
    const placeImg = placeItem.querySelector('.place__img');
    const placeTitle = placeItem.querySelector('.place__title');
    placeImg.setAttribute('src', data.link);
    placeImg.setAttribute('alt', data.name);
    placeTitle.textContent = data.name;

   /*Вешаем обработчик на кнопку лайка. Здесь можно простой колбэк*/
    const placeIconLike = placeItem.querySelector('.place__icon');
    placeIconLike.addEventListener('click', function(evt) {
      const ev = evt.target;
      ev.classList.toggle('place__icon_active');
    });

   /*Вешаем обработчик на удаление карточки. Здесь можно простой колбэк или запилить отдельную функцию*/
    const placeDeleteButton = placeItem.querySelector('.place__delete-button');

    placeDeleteButton.addEventListener('click', function() {
      let deletePlaceItem = placeDeleteButton.closest('.place');
      deletePlaceItem.remove();
    });

   //Открытие popup картинки
    placeImg.addEventListener('click', () => {
      placeImageScale.src = data.link;
      placeImageScale.alt = data.name;
      placeImageScaleCaption.textContent = data.name;
      openPopup(popupImage);
    });
    //Закрытие popup картинки
    popupCloseImage.addEventListener('click', () => {
    closePopup(popupImage)
    });

    return placeItem;
  }

