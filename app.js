let listaDeNumerosSorteados = [];
let numeroLimite = 20
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirNaTela( tag,texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial () {
    exibirNaTela ('h1', 'Jogo do número Secreto');
    exibirNaTela ('p', 'Escolha um numero entre 1 e 20');
}

exibirMensagemInicial()

function verificarChute() {
  let chute = document.querySelector('input').value;
  
  if (chute == numeroSecreto) {
    exibirNaTela ('h1','Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
    exibirNaTela ('p',mensagemTentativa);
    document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
      if (chute > numeroSecreto) {
           exibirNaTela ('p','O número secreto é menor');
    } else {
      exibirNaTela ('p','O núemro secreto é maior');
    }
    tentativas++;
    limparCampo();
}
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random () * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log (listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1 ;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled',true);
}