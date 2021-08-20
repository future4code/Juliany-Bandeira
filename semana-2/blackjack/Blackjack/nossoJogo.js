/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
/*
    const cartasUsuario = [comprarCarta(), comprarCarta()]
    const cartasComputador = [comprarCarta(), comprarCarta()]
    
    const textoCartas = (array) =>{
       const result = array.texto
       return result
    } 
    
    const valorCartas = (array) =>{
       const result = array.valor
       return result
    } 
    
    function somaValores(array){
       let soma = 0 
       for (let i = 0; i < array.length; i++){
       soma += array[i]
       }
       return soma
    }
    
    
    const textoCartasUsuario = cartasUsuario.map(textoCartas).join(" ")
    const textoCartasComputador = cartasComputador.map(textoCartas).join(" ")
    
    const valorCartasUsuario = cartasUsuario.map(valorCartas)
    const valorCartasComputador = cartasComputador.map(valorCartas)
    
    const totalUsuario = somaValores(valorCartasUsuario)
    const totalComputador = somaValores(valorCartasComputador)


    console.log("Bem-vindo(a) ao jogo de Blackjack!")
    const iniciaRodada = confirm("Quer iniciar uma nova rodada?")
    
    if(iniciaRodada){
       console.log(`Usuário - cartas: ${textoCartasUsuario}  - pontuação ${totalUsuario}`)
       console.log(`Computador - cartas: ${textoCartasComputador}  - pontuação ${totalComputador}`)
    
       if (totalUsuario === totalComputador){
          console.log ("Empate!")
       } else if (totalUsuario > totalComputador) {
          console.log ("O usuário ganhou!")
       } else if (totalComputador > totalUsuario) {
          console.log ("O computador ganhou!")
       } 
    } else {
       console.log("O jogo acabou")
    } */