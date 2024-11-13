// alert("Boas vindas ao jogo do número secreto");
// let numeroSecreto = 4;
// console.log(numeroSecreto)
// let chute = prompt("Escolha um número entre 1 e 10");
// console.log(`Escolheu: ${chute}!`)

// if (chute == numeroSecreto) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
//     console.log("Mais de 8000 de QI!")
// } else {
//     alert("Você é um beta, acabou errando.")
//     console.log("Betinha errou!")
// }

// ATIVIDADE 01

/*
Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
*/

// alert("Bem vindo ao meu site!")
// let dia = prompt("Qual dia é hoje?")
// let diaEscolhido = "Sabado"
// let diaEscolhido2 = "Domingo"

// if (dia == diaEscolhido || diaEscolhido2){
//     alert("Bom final de semana!")
// } else {
//     alert("Hoje tem aula ou já teve infelizmente.")
// }

// ATIVIDADE 02

/*
Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
*/
let numero = prompt("Digite um numero:")

if (numero < 0){
    alert("Seu numero é negativo.")
} else {
    alert("Seu numero é positivo.")
}