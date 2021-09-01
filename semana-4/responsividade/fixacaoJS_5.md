```function criarArrayNomesAnimais() {
const animais = [
{ nome: "Cachorro", classificacao: "mamífero" },
{ nome: "Papagaio", classificacao: "ave" },
{ nome: "Gato", classificacao: "mamífero" },
{ nome: "Carpa", classificacao: "peixe" },
{ nome: "Pomba", classificacao: "ave" }
]

function nomes(animais) {
return animais.nome
}

let arrayNomes = animais.map(nomes)

return arrayNomes

}```