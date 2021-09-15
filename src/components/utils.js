//Вспомогательные функции

//Функция отображения статуса сохранения на кнопке.
function loadingStateRender(popup, isLoading) {
  const buttonInLoad = popup.querySelector('.popup__button');
  buttonInLoad.disabled = !isLoading;
  buttonInLoad.textContent = isLoading ? 'Сохранение...' : 'Сохранить';
}

export {loadingStateRender}
