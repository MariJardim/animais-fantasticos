export default function initModal(){
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]')
  const modalContainer = document.querySelector('[data-modal="container"]');

  function toggleModal(event){
    event.preventDefault();
    modalContainer.classList.toggle('ativo')
  }

  function clickOut(event){
    if(event.target === this){
      toggleModal(event);
    }
  }
  if (botaoAbrir && botaoFechar && modalContainer){
    botaoAbrir.addEventListener('click', toggleModal)
    botaoFechar.addEventListener('click', toggleModal)
    modalContainer.addEventListener('click', clickOut)
  }
}