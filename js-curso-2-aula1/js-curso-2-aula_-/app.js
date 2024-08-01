let ListaDeNumerosSorteados = [] ;
let LimiteDaLista = 100
let NumeroSecreto = GerarNumeroAleatorio ();
console.log (NumeroSecreto)
let Tentativas = 1


function ExibirTextoNaTela (tag, Text) {
   let Campo = document.querySelector (tag)
   Campo.innerHTML = Text ;
}

function ExibirMenssagemInicial () {
ExibirTextoNaTela ("h1", "Jogo do Numero Secreto") ;
ExibirTextoNaTela ("p", `Escolha um numero de 1 à ${LimiteDaLista}`) ;
}

ExibirMenssagemInicial () ;

function verificarChute () {
   let Chute = document.querySelector("input").value ;
    if (Chute==NumeroSecreto){
       ExibirTextoNaTela ("h1", "Acertou") ;
       let PalavraTentativas = Tentativas > 1 ? "Tentativas" : "Tentativa" ;
       let MensagemTentativas = `voce descobriu o numero secreto ${NumeroSecreto} com ${Tentativas} ${PalavraTentativas} ` ;
       ExibirTextoNaTela ("p", MensagemTentativas) ;
       document.getElementById ("reiniciar").removeAttribute ("disabled");
   } else {
        if  (Chute>NumeroSecreto){
         ExibirTextoNaTela ("p", `O Numero secreto e menor que ${Chute}`) ;
        } else {
         ExibirTextoNaTela ("P",`O numero secreto é maior que ${Chute}`) ;
        }
      Tentativas++ ;
      LimpaCampo ();

   }
}

function GerarNumeroAleatorio (){
   let NumeroEscolhido = parseInt(Math.random() * LimiteDaLista + 1) ;
   let QuantidadeDeElementoNaLista = ListaDeNumerosSorteados.length ;
     if (QuantidadeDeElementoNaLista == LimiteDaLista){
      ListaDeNumerosSorteados = []
     }

    if (ListaDeNumerosSorteados.includes(NumeroEscolhido)){
    return GerarNumeroAleatorio() ;
   } else {
     ListaDeNumerosSorteados.push (NumeroEscolhido) ;
     console.log (ListaDeNumerosSorteados)
     return NumeroEscolhido ;
   }
   
}
function LimpaCampo (){
   Chute = document.querySelector ("input") ;
   Chute.value = "" ; 
}
function reiniciarJogo (){
  NumeroSecreto = GerarNumeroAleatorio ();
  LimpaCampo ();
  Tentativas = 1 ;
  ExibirMenssagemInicial () ;
  document.getElementById ("reiniciar").setAttribute ("disabled", true) 
}