//Функция отображения статуса сохранения на кнопке.
export function loadingStateRender(popup, isLoading) {
  let temp = popup.querySelector('.popup__button').textContent;
  if(isLoading){
    popup.querySelector('.popup__button').textContent ="Сохранение..."
  }
  else {
    popup.querySelector('.popup__button').textContent =  temp;
  }
}
