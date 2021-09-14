//Вспомогательные функции

//Функция отображения статуса сохранения на кнопке.
function loadingStateRender(popup, isLoading) {
  let buttonInLoad = popup.querySelector('.popup__button');
  let temp = buttonInLoad.textContent;
  buttonInLoad.disabled = !isLoading;
  buttonInLoad.textContent = isLoading ? 'Сохранение...' : 'Сохранить';
}
 //Функция-рендер, обновляющая счетчик лайков из сервера на странице
function updateCountLike(container, dataResponse) {
  container.querySelector('.place__count-like').textContent = dataResponse.likes.length;
}

export {updateCountLike, loadingStateRender}
