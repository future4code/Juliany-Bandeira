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
      for (i = 0; i< numeroDeCartas; i++){
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

      const textoCartasUsuario = cartasUsuario.map(textoCartas).join(" ")
      const textoCartasComputador = cartasComputador.map(textoCartas)
      const textoComputador = textoCartasComputador.join(" ")

      const valorCartasUsuario = cartasUsuario.map(valorCartas)
      const valorCartasComputador = cartasComputador.map(valorCartas)

      const totalUsuario = somaValores(valorCartasUsuario)
      const totalComputador = somaValores(valorCartasComputador)

      const fraseGanhador = ganhador(totalUsuario, totalComputador)

      const escolheCarta = confirm(`Suas cartas são ${textoCartasUsuario}. A carta revelada do computador é ${textoCartasComputador[0]}.`+"\n"+"Deseja comprar mais uma carta?")
      
      if(escolheCarta){
         cartasUsuarioUm = cartasUsuario = cartasUsuario.push(sorteiaCartas(1))

         const textoCartasUsuarioUm = cartasUsuarioUm.map(textoCartas).join(" ")

         const valorCartasUsuarioUm = cartasUsuarioUm.map(valorCartas)
         const totalUsuarioUm = somaValores(valorCartasUsuarioUm)
         
         if(totalUsuarioUm > 21){
            alert("O computador ganhou!")
         }

         const fraseGanhadorUm = ganhador(totalUsuarioUm, totalComputador)

         const escolheCarta1 = confirm(`Suas cartas são ${textoCartasUsuarioUm}. A carta revelada do computador é ${textoCartasComputador[0]}.`+"\n"+"Deseja comprar mais uma carta?")
      
         if(escolheCarta1){
         cartasUsuario = cartasUsuario.push(sorteiaCartas(1))

         const textoCartasUsuarioDois = cartasUsuario.map(textoCartas).join(" ")

         const valorCartasUsuarioDois = cartasUsuario.map(valorCartas)
         const totalUsuarioDois = somaValores(valorCartasUsuarioUm)

         if(totalUsuarioDois > 21){
         alert("O computador ganhou!")
         }

         const fraseGanhadorDois = ganhador(totalUsuarioDois, totalComputador)

         const escolheCarta2 = confirm(`Suas cartas são ${textoCartasUsuarioDois}. A carta revelada do computador é ${textoCartasComputador[0]}.`+"\n"+"Deseja comprar mais uma carta?")
            
            if(escolheCarta2){
               cartasUsuario = cartasUsuario.push(sorteiaCartas(1))

               const textoCartasUsuarioTres = cartasUsuario.map(textoCartas).join(" ")

               const valorCartasUsuarioTres = cartasUsuario.map(valorCartas)
               const totalUsuarioTres = somaValores(valorCartasUsuarioUm)
         
               if(totalUsuarioTres > 21){
               alert("O computador ganhou!")
               }

               const fraseGanhadorTres = ganhador(totalUsuarioTres, totalComputador)

            }else{
               alert(`Suas cartas são ${textoCartasUsuarioDois}. Sua pontuação é ${totalUsuarioDois}.`+"\n"+`As cartas do computador são ${textoComputador}. A pontuação do computador é ${totalComputador}`+"\n"+fraseGanhadorDois)
            }
         }else{
            alert(`Suas cartas são ${textoCartasUsuarioUm}. Sua pontuação é ${totalUsuarioUm}.`+"\n"+`As cartas do computador são ${textoComputador}. A pontuação do computador é ${totalComputador}`+"\n"+fraseGanhadorUm)
         }
      } else {
         alert(`Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${totalUsuario}.`+"\n"+`As cartas do computador são ${textoComputador}. A pontuação do computador é ${totalComputador}`+"\n"+fraseGanhador)
      } 
   } else {
         alert("O jogo acabou")
   }