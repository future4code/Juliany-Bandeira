/////////////////////////Exercícios de interpretação de código////////////////////

//1.a) vão ser criados 3 arrays contendo o item, o index do item e o array inteiro, 
// e isses serão impressos.

//2.a) vai imprimir apenas os nomes: [Amanda Rangel, Laís Petra, Letícia Chijo]

//3.a) vai imprimir os outros apelidos exceto "Chijo": [Mandi, Laura]


/////////////////////////Exercícios de escrita de código//////////////////////

//1.a) Crie um novo array que contenha apenas o nome dos doguinhos
//b) Crie um novo array apenas com os cachorros salsicha
//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
//A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const retiraApenasOsNomes = (array) =>{
    const resultado = array.nome
    return resultado 
 }
//a)
 const listaDeNomes = pets.map(retiraApenasOsNomes)
 console.log(listaDeNomes)

//b)
 const separaCaesSalsicha = (array) =>{
    const resultado = array.raca === "Salsicha" 
    return resultado
 } 

 const nomesCaesSalsicha = pets.filter(separaCaesSalsicha)
 console.log(nomesCaesSalsicha)

 //c)
const separaCaesPoople = (array) =>{
    const resultado = array.raca === "Poodle" 
    return resultado
 } 

const nomesCaesPoodle = pets.filter(separaCaesPoople).map(retiraApenasOsNomes)

const frases = nomesCaesPoodle.map((item, i)=> {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item}!`
})

console.log(frases)


//2.a) Crie um novo array que contenha apenas o nome de cada item
//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, 
//aplicando 5% de desconto em todos eles
//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array
//deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//a)
const listaNomesProdutos = produtos.map(retiraApenasOsNomes)
console.log(listaNomesProdutos)

//b)
const listaProdutosEPrecos = produtos.map((array)=>{
        const nome = array.nome
        const preco = (Number(array.preco) * 0.95).toFixed(2)
    return  {nome, preco} 
    })

console.log(listaProdutosEPrecos)

//c)
const separaBebidas = (array) => {
    const result = array.categoria === "Bebidas"
    return result
}

const listaBebidas = produtos.filter(separaBebidas)
console.log(listaBebidas)

//d)
const produtosYpe = (array) => {
    const result = array.nome.includes("Ypê") 
    return result
}

const listaYpe = produtos.filter(produtosYpe)
console.log(listaYpe)

//e)
const fraseProdutosYpe = listaYpe.map((array)=>{
    const nome = array.nome
    const preco = array.preco.toFixed(2)
return  `Compre ${nome} por R$ ${preco}` 
})

console.log(fraseProdutosYpe)

//////////////////////////////////---DESAFIOS---/////////////////////////////////////////////
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]
 //a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética
 const pokemonsOrdemAlfabetica = pokemons.sort()
 console.log(pokemonsOrdemAlfabetica)

 //b) Crie um novo array apenas com os tipos dos pokémons, sem repetição
function mostraTipos(array) {
    const tipo = array.tipo
    return tipo
    }

const tipos = pokemons.map(mostraTipos)
console.log(tipos)

const novaLista = tipos.filter((tipo, index, array) =>{
      return array.indexOf(tipo) === index
    })

console.log(novaLista)