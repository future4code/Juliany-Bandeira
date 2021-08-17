//                      Exercícios de interpretação de código
//1.a) O teste é se o testo da divisão é igual a 0.
//  b) Números pares
//  c) Números ímpares

//2.a) Para verificar o preço da fruta
//  b) O preço da fruta Maça é R$ 2.25
//  c) O preço da fruta Pêra é R$ 5.50
//      O preço da fruta Pêra é R$ 5

//3.a) Solicitando um número ao usuário
//  b) Esse número passou no teste. Mas se o número for -10 não aparecerá nada
//  pois não há condicional para essa situação
//  c) Sim, o último console.log está localizado no estopo global,
//  por isso não tem acessar a variável localizada no escopo local 


//                      Exercícios de escrita de código

//1. 
const idadeUsuario = Number(prompt("Qual sua idade?"))

const podeDirigir = (idade) => {
    if(idade >= 18) {
        console.log("Você pode dirigir")
    } else {
        console.log("Você não pode dirigir")
    }
}

podeDirigir(idadeUsuario)   

//2. 
const estudaqualturno = prompt("Qual turno você estuda? Responda apenas M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()


if(estudaqualturno === 'M') {
    console.log("Bom dia!") 
} else if (estudaqualturno === 'V') {
    console.log("Boa tarde!") 
} else if(estudaqualturno === 'N') {
    console.log("Boa noite!") 
} else {
    console.log("Responda apenas com a letra correspondente ao turno")
}

//3. 
const estudaqualturno = prompt("Qual turno você estuda? Responda apenas M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()

switch(estudaqualturno) {
    case 'M':
        console.log("Bom dia!")
        break
    case 'V':
        console.log("Boa tarde!")
        break
    case 'N':
        console.log("Boa noite!")
    default:
        console.log("Responda apenas com a letra correspondente ao turno")
}   

//4. 
const generoFilmeUsuario = prompt('Qual o gênero do filme?').toLowerCase()
const valorDoIngressoUsuario = Number(prompt('Qual o valor do ingresso?'))

function assistirFilme(genero, valor) {
    const generoFilme = genero === 'fantasia'
    const valorIngresso = valor < 15

    if(generoFilme && valorIngresso) {
        console.log('Bom filme!')
    } else {
        console.log('Escolha outro filme :(')
    }
}

assistirFilme(generoFilmeUsuario, valorDoIngressoUsuario)


//                        DESAFIO
//1.
const generoFilmeUsuario = prompt('Qual o gênero do filme?').toLowerCase()
const valorDoIngressoUsuario = Number(prompt('Qual o valor do ingresso?'))

function assistirFilme(genero, valor) {
    const generoFilme = genero === 'fantasia'
    const valorIngresso = valor < 15

    if(generoFilme && valorIngresso) {
        const lanchinho = prompt("Qual lanche vai comprar para acompanhar?") 
        console.log('Bom filme!')
        console.log(`Aproveite o seu ${lanchinho}`)
    } else {
        console.log('Escolha outro filme :(')
    }
}

assistirFilme(generoFilmeUsuario, valorDoIngressoUsuario)