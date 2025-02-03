var listaDeNumerosSorteados = [];
var numeroLimite = 10;
var numeroSecrto = gerarNumeroAleatorio();
var tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    var campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirMensagemInicial();

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10 : ');
}
function verificarChute() {
    var chute = document.querySelector('input').value;
    if (chute == numeroSecrto) {
        exibirTextoNaTela('h1', 'Acertou');
        var palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        var mensagemTeantaivas = `você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTeantaivas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecrto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    var numeroEsolhido = parseInt(Math.random() * numeroLimite + 1);
    var quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEsolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEsolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEsolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecrto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}