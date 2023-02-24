//atualmente usa mais modal e não pop up, mas ainda tem suas funçoes

//alert
let startButton = document.getElementById('start');

startButton.onclick = () => {
    alert('Você clicou em Start!');
}

//prompt
let stopButton = document.getElementById('stop');

stopButton.onclick = () => {
    let continua = prompt('Você clicou em Stop! Para continuar, digite "sim": ');
    console.log(continua);
}

//confirm
let resetButton = document.getElementById('reset');

resetButton.onclick = () => {
    let resposta = confirm('Você tem certeza que deseja resetar?');
    console.log(resposta);
}