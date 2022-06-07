export default class Tooltip{
  constructor(tooltips){
  this.tooltips = document.querySelectorAll(tooltips);

  //o bind sempre é feito quando deve-se botar this no callback de evento
  this.onMouseLeave = this.onMouseLeave.bind(this);
  this.onMouseMove = this.onMouseMove.bind(this);
  this.onMouseOver = this.onMouseOver.bind(this);
  }
//move a tooltip com base em seus estilos 
//de acordo com a posição do mouse
  onMouseMove(event){
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if(event.pageX + 240 > window.innerWidth){
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else{
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
}
//remove a tooltip e os eventos de mouse move e mouse leave
  onMouseLeave({currentTarget}){
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
    }
  
//cria a tooltipbox e coloca no body
  criarTooltipBox(element){
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }
  //Cria a tooltip e adiciona os eventos
  //de mouseMove e mouseLeave ao target
  onMouseOver({currentTarget}){
    //cria a tooltipbox e coloca em uma propriedade 
    this.criarTooltipBox(currentTarget);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    }
    //adiciona os eventos de mouseover a cada tooltip
    addTooltipsEvent(){
      this.tooltips.forEach((item)=>{
      item.addEventListener('mouseover', this.onMouseOver)
    })
    }
   init(){
     if(this.tooltips.length){
       this.addTooltipsEvent();
     }
     return this
   }
  }

