export default class Funcionamento{
  constructor(funcionamento, activeClass){
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
 }
 dadosFuncionamento(){
    this.diasSemana = this.funcionamento.dataset.semana.split(', ').map(Number); //ARRAY DIAS
    this.horarioSemana = this.funcionamento.dataset.horario.split(', ').map(Number); //ARRAY HORARIOS
 }
  dadosAgora(){
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay(); //HOJE
    this.horaAgora = this.dataAgora.getUTCHours() - 3; //AGORA UTC BRASIL
  }
  estaAberto(){
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto = this.horaAgora >= this.horarioSemana[0] && this.horaAgora < this.horarioSemana[1];
    return semanaAberto && horarioAberto;
  }
  ativaAberto(){
    if(this.estaAberto()){
    this.funcionamento.classList.add(this.activeClass)
}
  }
  init(){
    if(this.funcionamento){
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}

