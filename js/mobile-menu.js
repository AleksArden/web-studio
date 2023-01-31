getRef('.js-open-menu').addEventListener('click', onToggleMenu);
getRef('.js-close-menu').addEventListener('click', onToggleMenu);

function onToggleMenu() {
  getRef('.js-menu-container').classList.toggle('is-open');
  const isOpenMenu = getRef('.js-menu-container').classList.contains('is-open');
  const scrollLockMethod = isOpenMenu ?
    'disableBodyScroll' : 'enableBodyScroll';
  bodyScrollLock[scrollLockMethod](document.body);
}

window.matchMedia('(min-width: 768px)').addEventListener('change', onCloseMenu);
function onCloseMenu(evt) {
  if (!evt.matches) return;
  getRef('.js-menu-container').classList.remove('is-open');
  bodyScrollLock.enableBodyScroll(document.body);

}
