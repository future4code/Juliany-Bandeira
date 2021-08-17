// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const alturaUsuario = prompt("Insira a altura do retângulo:")
  const larguraUsuario = prompt("Insira a largura do retângulo:")

  console.log(alturaUsuario * larguraUsuario)
}



// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("Qual o ano atual?")
  const anoDoNascimento = prompt("Qual o ano do seu nascimento?")
  
  console.log(anoAtual - anoDoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura)

  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nomeUusario = prompt("Qual seu nome?")
  const idadeUsuario = prompt("Qual sua idade?")
  const emailUsuario = prompt("Insira seu e-mail")

  console.log(`Meu nome é ${nomeUusario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const primeiraCor = prompt("Qual sua cor favorita?")
  const segundaCor = prompt("Escreva mais uma cor:")
  const terceiraCor = prompt("E outra cor:")
  const arrayCores = []

  arrayCores.push(primeiraCor)
  arrayCores.push(segundaCor)
  arrayCores.push(terceiraCor)
  console.log(arrayCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const stringMaiuscula = string.toUpperCase()

  return stringMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const quantidadeMinima = custo / valorIngresso

  return quantidadeMinima
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  tamanhoString = (string1.length) === (string2.length)
  return tamanhoString
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiroElemento = array[0]

  return primeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimoElemento = array[(array.length) - 1]

  return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroElemento = array[0]
  const  ultimoElemento = array[(array.length) - 1]

  array.splice(0, 1)
  array.pop()
  array.push(primeiroElemento)
  array.unshift(ultimoElemento)

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const primeiraString = string1.toUpperCase()
  const segundaString = string2.toUpperCase()

  return primeiraString === segundaString
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = prompt("Insira o ano atual")
  const idade = anoAtual - prompt("Qual o ano do seu nascimento?")
  const emissaoIdentidade = prompt("Insira o ano de emissão de sua carteira de identidade:") 

  const idadeVinte = (idade <= 20) && (anoAtual - emissaoIdentidade >= 5)
  const idadeAcimaDeVinte = ((idade > 20) && (idade <= 50)) && (anoAtual - emissaoIdentidade >= 10)
  const idadeAcimaCinquenta = (idade > 50) && ((anoAtual - emissaoIdentidade) >= 15)

  const renovacaoobrigatoria = idadeVinte || idadeAcimaDeVinte || idadeAcimaCinquenta

  console.log(renovacaoobrigatoria)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const multiploQuatrocentos = ano % 400 === 0
  const multiploCem = !(ano % 100 === 0)
  const multiploQuatro = ano % 4 === 0

  const comparacao = multiploCem && multiploQuatro || multiploQuatrocentos

  return comparacao
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idadeCandidato = prompt("Você tem mais de 18 anos?")
  const ensinoMedio = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  console.log((idadeCandidato.includes("sim")) && (ensinoMedio.includes("sim")) && (disponibilidade.includes("sim")))
} 