let getRef = x => document.querySelector(x);

getRef("button[data-modal-open]").addEventListener('click', onToggle);
getRef("button[data-modal-close]").addEventListener('click', onToggle);
getRef(".backdrop").addEventListener('click', (evt) => { if (evt.target === evt.currentTarget) onToggle() })

function onToggle() {
  getRef("[data-modal]").classList.toggle("is-hidden")

  !getRef("[data-modal]").classList.contains("is-hidden") ? document.body.style.overflow = 'hidden' :
    document.body.style.overflow = 'auto';
}