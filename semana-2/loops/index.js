/*-------------------------Exercícios de interpretação de código--------------------
1. Está excutando código para somar o valor de i ao valor, 
    enquanto o valor de i for menor que 5
    10

2. a) 19
    21
    23
    25
    27
    30
b) 

3. 
*
**
***
****

*//*-------------------------Exercícios de escrita de código-----------------
1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado 
em uma variável. 
a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles,
um por um, e guarde esses nomes em um array
Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma 
quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, 
ele deve conseguir inserir 4 nomes.
c) Por fim, imprima o array com os nomes dos bichinhos no console*/
/*const petUsuário = Number(prompt("Quantos pets você tem ?"))
let nomesPets = []

if(petUsuário === 0) {
    console.log("Que pena! Mas você pode adotar um pet!")
} else {
  for(let i=1; i <= petUsuário; i++){
    let nomePet = prompt("Coloque o nome de um pet:")
    nomesPets.push(nomePet)
  }
  console.log("Seu(s) pet(s): "+ nomesPets)
} */
//------------------------------------------------------------------------------
/*2. Considere que você tenha acesso a um array  (chamado de 'array original') 
que é composto somente de números. Baseando-se nisso, crie uma função para cada
um dos itens abaixo, realizando as operações pedidas:
a) Escreva um programa que **imprime** cada um dos valores do array original.
b) Escreva um programa que **imprime** cada um dos valores do array original 
divididos por 10
c) Escreva um programa que **crie** um novo array contendo, somente, os números 
pares do array original e **imprima** esse novo array
d) Escreva um programa que **crie** um novo array contendo strings, da seguinte 
forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
e) Escreva um programa que imprima no console o maior e o menor números contidos 
no array original.*/

//let arrayOriginal = [2, 9, 12, 15, 28, 31, 32, 46, 52, 87, 93]
//a)
/*for(let numero of arrayOriginal) {
    console.log(numero)
}
*/
//b) 
/*for(let numero of arrayOriginal) {
    const numeroPorDez = numero / 10
    console.log(numeroPorDez)
} */

//c)
/*let novoArray = []

for(let numero of arrayOriginal) {
    if(numero%2 === 0) {
    novoArray.push(numero)
    }
}
console.log(novoArray)
*/
//d)
/*let arrayStrings = []

for(let i = 0; i <= arrayOriginal.length-1; i++) {
    let numero = arrayOriginal[i]
    let frase = `O elemento do índex ${i} é ${numero}`
    arrayStrings.push(frase)
}

console.log(arrayStrings)
*/
//e)
/*
function maiorValor(array) {
    let valorMaximo = 1
    for(let i = 0; i <= array.length-1; i++) {
        if(array[i] > valorMaximo) {
            valorMaximo = array[i]
        } 
    } return valorMaximo
}

let maior = maiorValor(arrayOriginal)

function menorValor(array) {
    let valorMinimo = 100
    for(let i = 0; i <= array.length-1; i++) {
        if(array[i] < valorMinimo){
        valorMinimo = array[i]
        }
    } return valorMinimo
}

let menor = menorValor(arrayOriginal)

console.log(`O maior numero é ${maior} e o menor é ${menor}.`) */


//-------------------------------------DESAFIO------------------------------------------------------

//1. 
/*const numeroJogadorUm = Number(prompt("Insira um número de 0 a 100"))
console.log("Vamos Jogar!")
let jogadorDois = Number(prompt("Agora sua vez tente acertar o número escolhido:"))

for( let i = jogadorDois; numeroJogadorUm !== jogadorDois; i++) {
    if(jogadorDois < numeroJogadorUm){
        console.log(`O numero escolhido foi ${jogadorDois}`)
        jogadorDois = Number(prompt("Errrrrrrrrou o número escolhido é maior. Escolha outro:"))
    } else if(jogadorDois > numeroJogadorUm) {
        console.log(`O numero escolhido foi ${jogadorDois}`)
        jogadorDois = Number(prompt("Errrrrrrrrou o número escolhido é menor. Escolha outro:"))
    }
} 
console.log("Parabéns você acertou!")
*/

//2.
/*let numeroEscolhido = Math.floor((Math.random() * 10) + 0)

  console.log("Vamos Jogar!")
let jogadorDois = Number(prompt("Agora sua vez tente acertar o número escolhido:"))

for( let i = jogadorDois; numeroEscolhido !== jogadorDois; i++) {
    if(jogadorDois < numeroEscolhido){
        console.log(`O numero escolhido foi ${jogadorDois}`)
        jogadorDois = Number(prompt("Errrrrrrrrou o número escolhido é maior. Escolha outro:"))
    } else if(jogadorDois > numeroEscolhido) {
        console.log(`O numero escolhido foi ${jogadorDois}`)
        jogadorDois = Number(prompt("Errrrrrrrrou o número escolhido é menor. Escolha outro:"))
    }
} 
console.log("Parabéns você acertou!")
*/
// Não faço a menor ideia como isso funcionou kkkkk