
//Selecionar os elementos
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let time = document.getElementsByTagName('time')[0];
let body = document.getElementsByTagName('body')[0];

//Escrever no localStorage
startButton.onclick = function(){
    let d = new Date();
    localStorage.setItem('time', d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());
    localStorage.setItem('time_start', d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());
}

//Buscar no localStorage
body.onload = function(){
    time.textContent = localStorage.getItem('time');
    if (localStorage.getItem('time')== null) {
        time.textContent = localStorage.getItem('time_start');
    } else if (localStorage.getItem('time_start')== null){
        time.textContent = '00:00:00';
    }
}

//Remover do localStorage remove dado especifico
stopButton.onclick = function(){
    localStorage.removeItem('time');
    time.textContent = localStorage.getItem('time_start');
    if (localStorage.getItem('time_start')== null) {
        time.textContent = '00:00:00';
    }
}

//Limpar localStorage remove todos os dados
resetButton.onclick = function(){
    localStorage.clear();
    time.textContent = '00:00:00';
}