export default function initFuncionamento(){
  const funcionamento = document.querySelector('[data-semana]');
  const datas = funcionamento.dataset.semana.split(', ').map(Number); //ARRAY DIAS
  const horarios = funcionamento.dataset.horario.split(', ').map(Number); //ARRAY HORARIOS
  
  const dataAgora = new Date();
  const diaDaSemana = dataAgora.getDay(); //HOJE
  const horaAgora = dataAgora.getHours(); //AGORA
  
  const semanaAberto = datas.includes(diaDaSemana) //? funcionamento.classList.add('aberto') : funcionamento.classList.remove('aberto')

  const horarioAberto = horaAgora >= horarios[0] && horaAgora < horarios[1] 
  
  if (semanaAberto && horarioAberto){
    funcionamento.classList.add('aberto')
  }
}

