let listaDeNumerosSorteados = [];
let maximoNumeroSorteado = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirTextoNaTelaInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");

    let palavraTentativa = tentativas == 1 ? "tentativa" : "tentativas";
    let mensagemAcerto = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;

    exibirTextoNaTela("p", mensagemAcerto);

    document.getElementById("reiniciar").removeAttribute("disabled");
    document.getElementById("chutar").setAttribute("disabled", "");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor do que o chute.");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior do que o chute.");
    }
    tentativas++;
    limparCampo();
  }
  console.log(numeroSecreto);
  console.log(chute);
  console.log(numeroSecreto == chute);
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  tentativas = 1;

  document.getElementById("chutar").removeAttribute("disabled");
  document.getElementById("reiniciar").setAttribute("disabled", "");

  exibirTextoNaTelaInicial();

  limparCampo();
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * maximoNumeroSorteado + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == maximoNumeroSorteado) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function exibirTextoNaTelaInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número de 1 a 10");
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}
