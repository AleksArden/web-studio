let getRef = x => document.querySelector(x);

getRef("button[data-modal-open]").addEventListener('click', onToggle);
getRef("button[data-modal-close]").addEventListener('click', onToggle);
getRef(".backdrop").addEventListener('click', onClickBackdrop);


function onToggle() {
  getRef("[data-modal]").classList.toggle("is-hidden")
  const isModal = !getRef("[data-modal]").classList.contains("is-hidden");

  const scrollLockMethod = isModal
    ? 'disableBodyScroll'
    : 'enableBodyScroll';
  bodyScrollLock[scrollLockMethod](document.body);
  if (isModal) {
    window.addEventListener('keydown', onClickEscape);
  }
}

function onClickBackdrop(evt) {
  if (evt.target === evt.currentTarget) onToggle()
}


function onClickEscape(evt) {
  const isEscape = evt.code === 'Escape';
  console.log(isEscape)
  if (isEscape) {
    onToggle();
    window.removeEventListener('keydown', onClickEscape);
  }
}
