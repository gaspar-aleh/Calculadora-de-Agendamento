
const inputData = document.querySelector('#date');
const ticket = document.querySelector('#tkt');
const resultado = document.getElementById("resultado");



function calcular(){
 
let firstDate = inputData.value;
let secDate = inputData.value;

let dt1 = new Date(firstDate);
let dt2 = new Date(secDate);

dt1.setDate(dt1.getDate() + 21);
dt2.setDate(dt2.getDate() + 36);

console.log(dt1, dt2);

resultado.innerHTML = `<p>Segue o número de protocolo de seu agendamento: <strong>#${ticket.value}</strong>. <br><br> As datas disponíveis para o seu agendamento são: <strong> ${new Intl.DateTimeFormat('pt-BR').format(dt1)} - ${new Intl.DateTimeFormat('pt-BR', {weekday:'long'}).format(dt1)}</strong> e <strong>${new Intl.DateTimeFormat('pt-BR').format(dt2)} - ${new Intl.DateTimeFormat('pt-BR', {weekday:'long'}).format(dt1)}</strong>. Para qual destas datas podemos agendar?`
}

