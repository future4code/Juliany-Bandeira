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

   const iniciaRodada = confirm("Bem vinde ao jogo de Blackjack!"+"\n"+"Quer iniciar uma nova rodada?")

   function sorteiaCartas(numeroDeCartas) {
      let cartas = []
      for (i = 0; i < numeroDeCartas; i++){
         cartas.push(comprarCarta())
      } return cartas
   }

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

   const ganhador = (total1, total2) => {
      if(total1 > 21){
         result = "O computador ganhou!"
      } else if(total2 > 21){
         result = "O usuário ganhou!"
      }else if(total1 === total2){
         result = "Empate!" 
      } else if(total1 > total2){
         result = "O usuário ganhou!"
      } else if(total2 > total1){
         result = "O computador ganhou!"
      } return result
   }


   if(iniciaRodada){
      let cartasUsuario = sorteiaCartas(2)
      let cartasComputador = sorteiaCartas(2)

      let textoCartasUsuario = cartasUsuario.map(textoCartas)
      let apenasTextoCartasUsuario = textoCartasUsuario.join(" ")

      let textoCartasComputador = cartasComputador.map(textoCartas)
      let textoComputador = textoCartasComputador.join(" ")

      let valorCartasUsuario = cartasUsuario.map(valorCartas)
      let valorCartasComputador = cartasComputador.map(valorCartas)

      let totalUsuario = somaValores(valorCartasUsuario)
      let totalComputador = somaValores(valorCartasComputador)

      let fraseGanhador = ganhador(totalUsuario, totalComputador)

      let escolheCarta = confirm(`Suas cartas são ${apenasTextoCartasUsuario}. A carta revelada do computador é ${textoCartasComputador[0]}.`+"\n"+"Deseja comprar mais uma carta?")
      
      if(escolheCarta){
         let novaCarta = sorteiaCartas(1)
         let textoNovaCarta = novaCarta.map(textoCartas)
         let valorNovaCarta = novaCarta.map(valorCartas)

         let textoCartasUsuarioComNovaCarta = [textoCartasUsuario[0], textoCartasUsuario[1], textoNovaCarta[0]].join(" ")
         let valorCartasUsuarioComNovaCarta = [valorCartasUsuario[0], valorCartasUsuario[1], valorNovaCarta[0]]

         let totalUsuarioComNovaCarta = somaValores(valorCartasUsuarioComNovaCarta)

         let fraseGanhadorComNovaCarta = ganhador(totalUsuarioComNovaCarta, totalComputador)

         if (totalUsuarioComNovaCarta > 21){
            alert (`Que pena, seu total é ${totalUsuarioComNovaCarta} pontos.`+"\n"+`O computador ganhou!`)
         } else {
            let escolheCarta1 = confirm(`Suas cartas são ${textoCartasUsuarioComNovaCarta}. A carta revelada do computador é ${textoCartasComputador[0]}.`+"\n"+"Deseja comprar mais uma carta?")
            
            if(escolheCarta1){
            let novaCarta2 = sorteiaCartas(1)
            let textoNovaCarta2 = novaCarta2.map(textoCartas)
            let valorNovaCarta2 = novaCarta2.map(valorCartas)

            let textoCartasUsuarioComNovaCarta2 = [textoCartasUsuarioComNovaCarta[0], textoCartasUsuarioComNovaCarta[1], textoCartasUsuarioComNovaCarta[2], textoNovaCarta2[0]].join(" ")
            let valorCartasUsuarioComNovaCarta2 = [valorCartasUsuarioComNovaCarta[0], valorCartasUsuarioComNovaCarta[1], valorCartasUsuarioComNovaCarta[2], valorNovaCarta2[0]]

            let totalUsuarioComNovaCarta2 = somaValores(valorCartasUsuarioComNovaCarta2)

            fraseGanhadorComNovaCarta = ganhador(totalUsuarioComNovaCarta2, totalComputador)

            if (totalUsuarioComNovaCarta2 > 21){
               alert (`Que pena, seu total é ${totalUsuarioComNovaCarta2} pontos.`+"\n"+`O computador ganhou!`)
               } else {
                  escolheCarta2 = confirm(`Suas cartas são ${textoCartasUsuarioComNovaCarta2}. A carta revelada do computador é ${textoCartasComputador[0]}.`+"\n"+"Deseja comprar mais uma carta?")
            
                  if(escolheCarta2){
                     let novaCarta3 = sorteiaCartas(1)
                     let textoNovaCarta3 = novaCarta3.map(textoCartas)
                     let valorNovaCarta3 = novaCarta3.map(valorCartas)

                     let textoCartasUsuarioComNovaCarta3 = [textoCartasUsuarioComNovaCarta2[0], textoCartasUsuarioComNovaCarta2[1], textoCartasUsuarioComNovaCarta2[2], textoCartasUsuarioComNovaCarta2[3], textoNovaCarta3[0]].join(" ")
                     let valorCartasUsuarioComNovaCarta3 = [valorCartasUsuarioComNovaCarta2[0], valorCartasUsuarioComNovaCarta2[1], valorCartasUsuarioComNovaCarta2[2], valorCartasUsuarioComNovaCarta2[3], valorNovaCarta3[0]]

                     let totalUsuarioComNovaCarta3 = somaValores(valorCartasUsuarioComNovaCarta3)

                     fraseGanhadorComNovaCarta = ganhador(totalUsuarioComNovaCarta3, totalComputador)

                     if (totalUsuarioComNovaCarta3 > 21){
                        alert (`Que pena, seu total é ${totalUsuarioComNovaCarta3} pontos.`+"\n"+`O computador ganhou!`)
                     }

                  } else {
                  alert(`Suas cartas são ${textoCartasUsuarioComNovaCarta2}. Sua pontuação é ${totalUsuarioComNovaCarta2}.`+"\n"+`As cartas do computador são ${textoComputador}. A pontuação do computador é ${totalComputador}`+"\n"+fraseGanhadorComNovaCarta)
                  }
                  }
            } else {
               alert(`Suas cartas são ${textoCartasUsuarioComNovaCarta}. Sua pontuação é ${totalUsuarioComNovaCarta}.`+"\n"+`As cartas do computador são ${textoComputador}. A pontuação do computador é ${totalComputador}`+"\n"+fraseGanhadorComNovaCarta)
            }
         }
      } else {
         alert(`Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${totalUsuario}.`+"\n"+`As cartas do computador são ${textoComputador}. A pontuação do computador é ${totalComputador}`+"\n"+fraseGanhador)
      } 
   } else {
         alert("O jogo acabou!")
   }