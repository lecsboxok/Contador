// var data = new Date(2006, 10, 5).getMonth(); //ANO, MÊS, DIA, HORA, MINUTOS, SEGUNDOS
// //Date('Nov 15, 2023 00:00:00')
// //getDate, getHours, getMinutes, getSegunds, getFullyear, getMonth, getDay, getTime
// console.log(data);

var relogio = setInterval(function () {
    let dia = new Date().getDate();
    let horas = new Date().getHours();
    let minutos = new Date().getMinutes();
    let segundos = new Date().getSeconds();
    console.log(`${dia}:${minutos}:${segundos}`);
}, 1000)