```function calculaNota(ex, p1, p2) {
  
  const mediaNotas = (ex + p1 + p2)/3 

  if(mediaNotas >= 9){
    
    return "A"
    
  } else if(mediaNotas < 9 && mediaNotas >= 7.5){
    
    return "B"
    
  } else if(mediaNotas < 7.5 && mediaNotas >= 6){
    
    return "C"
    
  } else{
    
    return "D"
  }
}```