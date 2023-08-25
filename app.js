alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1;
console.log(numeroSecreto);
let chute ;
let tentativas = 1;



while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto ) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
       // tentativas = tentativas + 1;
        tentativas++;
    } 
} 

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`); 





/* console.log('Seja bem vindo');
let nome = 'Cleverson';
console.log(`Olá, ${nome}`);

alert(`Olá, ${nome}.`);
let linguagemDeProgramacao = prompt('Qual sua linguagem de programação favorita ?');
console.log(`${linguagemDeProgramacao}`);

let valor1 = 5;
let valor2 = 3;
let resultado = valor1 - valor2;
console.log(`O resultado de  ${valor1} - ${valor2} é : ${resultado}.`);

let idade = prompt('Digite sua idade por favor.')
if (idade >= 18) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}

let numero = prompt('Digite um número');
if (numero < 0) {
    console.log('Número negativo')
} else if (numero > 0) {
    console.log('Número positivo');
} else {
    console.log('Número é zero');
}

let valor = 1;
while (valor <= 10) {
    console.log(valor);
    valor ++;
}

let nota = 5;
if (nota >= 7) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

let numeroAleatorio = parseInt(Math.random() * 1000) + 1;
console.log(numeroAleatorio); */




/* let diaDaSemana = prompt('Digite um dia da semana');
if (diaDaSemana == 'Sábado') {
    alert('Bom final de semana');
} else if (diaDaSemana == 'Domingo') {
    alert('Bom final de semana');
} else {
    alert('Boa semana');
} */



/* let numeroDigitado = prompt('Digite um número');
console.log(numeroDigitado);
if (numeroDigitado >= 0 ) {
    alert('Número positivo');
} else {
    alert('Número negativo');
} */


/* let pontuacao = prompt('Qual sua pontuação no jogo ?');
console.log('valor digitado', pontuacao);
if (pontuacao >= 100) {
    alert('Parabéns você venceu')
} else {
    alert('Tente outra vez');
} */


/* let saldoDaConta = 500;
console.log('valor digitado', saldoDaConta);
alert(`Seu saldo é de R$${saldoDaConta}.`); */

/* let nome = prompt('Digite seu nome');
console.log(nome);
alert(`Seja bem vindo ${nome}`); */

/* let contador = 1;
while(contador <= 10) {
    console.log(contador);
    contador++;
} */

/* let contador = 10;
while (contador >= 0) {
    console.log(contador);
    contador --;
} */

/* let numeroMaximo = prompt('Digite um número:');
while(numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo --;
} */

/* let numeroMaximo = prompt('Digite um número');
let contador = 0;

while (contador <= numeroMaximo) {
    console.log(contador);
    contador ++;
} */

/* prompt('digite sua idade');
let idade = 25;
let possuiHabilitacao = true;

if (idade > 18 && possuiHabilitacao) {
    console.log('Pode dirigir!');
} else {
    console.log('Aguarde a maior idade.');
} */

/* let temMaça = false;
let temBanana = true;

if (temMaça || temBanana) {
    console.log('Você tem frutas');
} else {
    console.log('Você não tem frutas');
} */






