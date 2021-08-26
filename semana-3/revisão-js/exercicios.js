// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  array.sort((a, b) => a - b)

  return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPares = array.filter(
        (numero=>{return numero%2 === 0})
     )
     return arrayPares
    }

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayParesElevadoADois = array.filter(
        (numero=>{return numero %2 === 0})
     ).map((item, indice, array) => {return item * item})
     return arrayParesElevadoADois
    }

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = Math.max(...array)

    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let oMaiorNumero = Math.max(num1, num2)

    let oMenorNumero = Math.min(num1, num2)

    let ehMaiorDivisivelPorMenor = oMaiorNumero%oMenorNumero === 0

    let aDiferenca = oMaiorNumero-oMenorNumero

    let objeto = {
        maiorNumero: oMaiorNumero,
        maiorDivisivelPorMenor: ehMaiorDivisivelPorMenor,
        diferenca: aDiferenca
    } 
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = []
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i)
        }
    }
    return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  
    if(ladoA === ladoB && ladoC === ladoA){
        return "Equilátero"
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) {
        return "Escaleno"
    } else {
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let ordemMenorParaMaior = array.sort((a, b) => a - b)

    let segundoMenor = ordemMenorParaMaior[1]
    let segundoMaior = ordemMenorParaMaior[ordemMenorParaMaior.length-2]

    let novoArray = [segundoMaior, segundoMenor]

    return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
    const frase = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`

    return frase
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let cadastroPessoaAnonimo = {
       ...pessoa,
       nome: "ANÔNIMO"
   }
    return cadastroPessoaAnonimo
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasAutorizadas = pessoas.filter((item) => {
        if(item.idade > 14 &&
            item.idade < 60 &&
            item.altura >= 1.5
        ) return item
    })
    return pessoasAutorizadas
 }
 
// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNãoAutorizadas = pessoas.filter((item) => {
        if(item.idade <= 14 ||
            item.idade >= 60 ||
            item.altura < 1.5
        ) return item
    })
    return pessoasNãoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

    const somar = (num1, num2) => num1 + num2

    contas.forEach(conta => {

        const somaCompra = conta.compras.reduce(somar, 0)

        conta.saldoTotal = conta.saldoTotal - somaCompra

        conta.compras = []
    })

    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

    const comparaNomes = (a, b) => a.nome > b.nome ? 1 : -1

    return consultas.sort(comparaNomes)

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}