export function cardLikeToggle (evt) {
  const e = evt.target;
  if(e.classList.contains('place__icon_active')) {
    e.classList.remove('place__icon_active');
  }
  else {
    e.classList.add('place__icon_active')
  }
}
