let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo=document.querySelector(tag)
campo.innerHTML = texto 
responsiveVoice.speak(texto,'Brazilian Portuguese Female',
{rate: 1.2});
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'jogo do numero secreto')
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10')
}
mensagemInicial()

console.log (`o numero secreto é ${numeroSecreto}`)

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
         exibirTextoNaTela('h1', 'Acertou');
         let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
         let mensagemTentetivas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}! `;
         exibirTextoNaTela('p', mensagemTentetivas);
         document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        if (chute> numeroSecreto) {
            exibirTextoNaTela ('p', 'O numero secreto é menor');
    } else { 
        if(chute< numeroSecreto) {
        exibirTextoNaTela ('p', 'O numero secreto é maior')};
    }
    tentativas++
     limparCampo();
    }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
   if (quantidadeDeElementosNaLista == numeroEscolhido) {
     listaDeNumerosSorteados = [];

   }

   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push (numeroEscolhido);
    console.log (listaDeNumerosSorteados);
    return numeroEscolhido;
   }    
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value= '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}