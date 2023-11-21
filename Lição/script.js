// setInterval(atualizarContador, 1000);
let contador = 0;
let posicao; //VARIÁVEL PARA ADICIONAR A POSIÇÃO DO INTERVALO
let progresso = 0;

// FUNÇÃO PARA ATUALIZAR O CONTADOR
function atualizarContador () {
    contador++;
    document.getElementById('contador').textContent = contador;

    //ATUALIZA A BARRA DE PROGRESSO
    progresso = (contador / 10) * 100;
    document.getElementById('progresso').style.width = progresso + '%';

    //VERIFICA SE O CONTADOR E PAUSA O INTERVALO
    if(contador === 10) {
        pausarContador();
    }
}

function iniciarContador() {
    if(contador === 10) {
        reiniciarContador();
    } else {
        posicao = setInterval(atualizarContador, 1000);
    }
}

function pausarContador () {
    clearInterval(posicao);
}

function reiniciarContador() {
    pausarContador();
    contador = 0;
    progresso = 0;
    document.getElementById('contador').textContent = contador;
    document.getElementById('progresso').style.width = '0';
}

//CONFIGURA O BOTÃO PARA PARAR O CONTADOR QUANDO CLICADO
document.getElementById('btnIniciar').addEventListener('click', iniciarContador)
document.getElementById('btnPausar').addEventListener('click', pausarContador)
document.getElementById('btnReiniciar').addEventListener('click', reiniciarContador)