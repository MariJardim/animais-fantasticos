export default class initModal{
  constructor(botaoAbrir, botaoFechar, modalContainer){
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.modalContainer = document.querySelector(modalContainer);
    //bind this ao callback para
    //fazer referencia ao objeto
    //da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOut = this.clickOut.bind(this)
  }
//abre ou fecha o modal
  toggleModal(){
    this.modalContainer.classList.toggle('ativo')
  }
  //adiciona evento de toggle ao modal
  eventToggleModal(event){
    event.preventDefault();
    this.toggleModal();
  }
  //fecha o modal ao clicar
  //do lado de fora
  clickOut(event){
    if(event.target === this.modalContainer){
      this.toggleModal();
    }
  }
  //adiciona os eventos aos elementos do modal
  addModalEvents(){
    this.botaoAbrir.addEventListener('click', this.eventToggleModal)
    this.botaoFechar.addEventListener('click', this.eventToggleModal)
    this.modalContainer.addEventListener('click', this.clickOut)
  }
  init(){
    if (this.botaoAbrir && this.botaoFechar && this.modalContainer){
    this.addModalEvents();
  }
  return this
  }
  
}