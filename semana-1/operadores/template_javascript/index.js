// Exercícios de interpretação de código
/* 1. 
a. false
b. false
c. true
d. bollean

2. A resposta do prompt vem sempre como string 

3. 
let primeiroNumero = Number (prompt("Digite um número!"))
let segundoNumero = Number (prompt("Digite outro número!"))

const soma = primeiroNumero + segundoNumero

console.log(soma) */

// Exercícios de escrita de código
// 1.
const idadeUsuario = Number (prompt("Qual sua idade?")) 
const idadeAmigo = Number (prompt("Qual a idade do seu melhor amigo?"))

console.log("Sua idade é maior do que a do seu melhor amigo?", idadeUsuario > idadeAmigo)

console.log(idadeUsuario - idadeAmigo)

//2.
const numeroPar = Number (prompt("Digite um número par!"))

console.log(numeroPar % 2)

//c) todos os números pares tem resto da divisão 0 quando divididos por 2
//d) nesse caso o resto da divisão é 1

//3. 
const idadeEmAnos = Number (prompt("Qual sua idade? (Resposta em anos)"))

const idadeEmMeses = idadeEmAnos * 12
const idadeEmDias = idadeEmAnos * 365
const idadeEmHoras = idadeEmDias * 24

console.log("Sua idade em meses: ",idadeEmMeses ,"meses")

console.log("Sua idade em dias: ", idadeEmDias ,"dias")

console.log("Sua idade em horas: ", idadeEmHoras ,"horas")

//4.
const primeiroNumero = Number (prompt("Digite um número!"))
const segundoNumero = Number (prompt("Digite outro número!"))
const divisivel1 = primeiroNumero % segundoNumero
const divisivel2 = segundoNumero % primeiroNumero

console.log("O primeiro numero é maior que segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro numero é igual ao segundo?", primeiroNumero === segundoNumero)
console.log("O primeiro numero é divisível pelo segundo?", divisivel1 === 0)
console.log("O segundo numero é divisível pelo primeiro?", divisivel2 === 0)