export default function initAccordion(){
  const listaTitulo = document.querySelectorAll('[data-anime="accordion"] dt')
  const classeAtiva = 'ativo'

  function ativar(){
    this.classList.toggle(classeAtiva)
    this.nextElementSibling.classList.toggle(classeAtiva)
  }

  if(listaTitulo.length){
    listaTitulo[0].classList.add(classeAtiva)
    listaTitulo[0].nextElementSibling.classList.add(classeAtiva)
    listaTitulo.forEach((titulo)=>{
      titulo.addEventListener('click', ativar)
    })
  }
}