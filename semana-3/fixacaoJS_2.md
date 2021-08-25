```function calculaPrecoTotal(quantidade) {
  
  if(quantidade < 12) {
    precoDaMaca = 1.30
  } else {
    precoDaMaca = 1.00
  }
  
  const totalDaCompra = precoDaMaca*quantidade
  
  return totalDaCompra
}```