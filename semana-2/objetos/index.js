// ---- Exercícios de interpretação de código

//1. a) Matheus Nachergaele
//      Virginia Cavendish
//      canal: "Globo", horario: "14h"

//2. a) nome: "Juca", idade: 3, raca: "SRD"
//      nome: "Juba", idade: 3, raca: "SRD"
//      nome: "Jubo", idade: 3, raca: "SRD"

//   b) Copia o objeto que se segue

//3. a) false
//      undefined        
//   b) false por ser o valor atribuido a backender
//      undefined pois ter sido solicitado um dado que não existe no objeto


// ---- Exercícios de escrita de código

//------------- 1.
//a) 
const pessoa = {
    nome: "Amanda",
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
}

const frase = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} e ${pessoa.apelidos[2]} `

console.log(frase)

//b) 
const novosApelidos = {
    ...pessoa, 
    apelidos: ["Mandica", "Manda", "Amandoca"]
}

const frase2 = `Eu sou ${novosApelidos.nome}, mas pode me chamar de: ${novosApelidos.apelidos[0]}, ${novosApelidos.apelidos[1]} e ${novosApelidos.apelidos[2]} `

console.log(frase2)

//-------------- 2.
//a) 
const pessoa1 = {
    nome: "Fabiana",
    idade: 30,
    profissao: "Backender"
}

const pessoa2 = {
    nome: "Katia",
    idade: 43,
    profissao: "Frontender"
}

//b)

function minhaFuncao(pessoa) {
    let array = [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]

    return array
}

console.log("Retorno:", minhaFuncao(pessoa1))
console.log("Retorno:", minhaFuncao(pessoa2))

//--------------------- 3.
//a)
let carrinho = []
//b)
const fruta1 = {
    nome: "Maça",
    disponibilidade: true
}

const fruta2 = {
    nome: "Goiaba",
    disponibilidade: true
}

const fruta3 = {
    nome: "Mamão",
    disponibilidade: true
}
//c)
function comproPrimeiro(fruta) {
    carrinho.push(fruta)   
    return carrinho
}

comproPrimeiro(fruta1)
comproPrimeiro(fruta2)
comproPrimeiro(fruta3)

console.log(carrinho)