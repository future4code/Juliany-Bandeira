//Exercícios de interpretação de código

/*1. a) 10
        100

    b) Mesmo a function desempenhando sua funçãop visto que foi chamada, 
    não seria impresso nada no console.

2. a) Deixa todas as letras em minúsculo e faz a busca da palavra solicitada
      no caso "cenoura" dando uma resposta true ou false.

    b) i.true
       ii. true
       iii. false */



//Exercícios de escrita de código

//1. a)
/*function imprimeMinhaApresentacao() {
    const frase = "Eu sou Juliany, tenho 32 anos, moro em Cubatão e sou estudante."
    console.log(frase)
}

imprimeMinhaApresentacao()

    //b)
function imprimeApresentacao(nome, idade, cidade, profissao) {
    const frase = console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
    return frase
}

imprimeApresentacao("Melissa", 28, "Santos", "enfermeira")*/


//2. a)
/*function somaDoisNumeros(num1, num2) {
    const resultado = num1 + num2
    return resultado
}

console.log(somaDoisNumeros(5, 7))

    //b)
function ehMaiorOuIgual(num1, num2) {
    const resultado = num1 >= num2
    return resultado 
}

    //c)
function ParOuNao(number) {
    const resultado = number % 2 === 0
    return resultado
}

console.log(ParOuNao(7))
*/
    //d)
/*function mensagemLetrasMaiusculas(mensagem) {
    const resultado = `${mensagem.length} ${mensagem.toUpperCase()}`
    return resultado
}

const mensagem = prompt("Insira uma mensagem")

console.log(mensagemLetrasMaiusculas(mensagem))*/


//3.
/*function soma(num1, num2) {
    const result = num1 + num2
    return result
}

function subtracao(num1, num2) {
    const result = num1 - num2
    return result
}

function multiplicacao(num1, num2) {
    const result = (num1 * num2)
    return result
}

function divisao(num1, num2) {
    const result = num1 / num2
    return result
}

const num1 = Number(prompt("Coloque um número:"))
const num2 = Number(prompt("Insira outro número:"))

console.log("Números inseridos:", num1, "e", num2)
console.log("Soma:", soma(num1, num2))
console.log("Diferença:", subtracao(num1, num2))
console.log("Multiplicação:", multiplicacao(num1, num2))
console.log("Divisão:", divisao(num1, num2)) */