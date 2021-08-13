/*Exercício de interpretação de código

Exercício 1 
O console.log vai imprimir 10, 5

Exercício 2
O console.log vai imprimir b, c, a

Exercício 3
p pode ser substiruído por cargaHorariaDiaria 
t pode ser substituído por valorDaDiaria*/


//Exercício de escrita de código

//Exercício 1
let nome
let idade

console.log(typeof nome)
console.log(typeof idade)
//resultou em undefined, pois não foi atruído valor às variáveis

let nome1 = prompt("Qual seu nome?")
let idade1 = prompt("Qual a sua idade?")

console.log(typeof nome1)
console.log(typeof idade1)
//o prompt retorna string como resposta ao typeof

let nome3 = prompt("Qual seu nome?")
let idade3 = prompt("Qual a sua idade?")

console.log("Olá", nome3, "você tem", idade3, "anos.")

//Exercício 2
let chuva = prompt("Hoje está chovendo?")
console.log("Hoje está chovendo?")
console.log(prompt("Hoje está chovendo?")) 

let feriado = prompt("Hoje é feriado?")
console.log("Hoje é feriado?")
console.log(prompt("Hoje é feriado?")) 

let ocupadx = prompt("Você está ocupadx?")
console.log("Você está ocupadx?")
console.log(prompt("Você está ocupadx?"))

//Exercício 3
let a = 10
let b = 25
let c = 10
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)