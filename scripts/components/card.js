/*Функция создания карточки*/
export {createCard};
import {templatePlace} from '../main.js';
import {openPopup, closePopup, popupCloseImage, placeImageScale, popupImage , placeImageScaleCaption} from '../main.js';

function createCard(data) {
    let placeItem = templatePlace.querySelector('.place').cloneNode(true);
    /*берем данные из словаря или формы для рендеринга контента карточки*/
    let placeImg = placeItem.querySelector('.place__img');
    let placeTitle = placeItem.querySelector('.place__title');
    placeImg.setAttribute('src', data.link);
    placeImg.setAttribute('alt', data.name);
    placeTitle.textContent = data.name;
  
   /*Вешаем обработчик на кнопку лайка. Здесь можно простой колбэк*/
    let placeIconLike = placeItem.querySelector('.place__icon');
    placeIconLike.addEventListener('click', function(evt) {
      const eventTarget = evt.target;
      eventTarget.classList.toggle('place__icon_active');
    });
  
   /*Вешаем обработчик на удаление карточки. Здесь можно простой колбэк или запилить отдельную функцию*/
    let placeDeleteButton = placeItem.querySelector('.place__delete-button');
  
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

