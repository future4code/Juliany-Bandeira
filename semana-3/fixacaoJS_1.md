```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 const salarioFixo = 2000
 let comissao = qtdeCarrosVendidos*100
 let comissaoPercentual = (valorTotalVendas*0.05)
 
 const salarioFinal = salarioFixo + comissao + comissaoPercentual
 
   return salarioFinal
}```