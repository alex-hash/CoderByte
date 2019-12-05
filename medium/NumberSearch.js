function NumberSearch(str) { 

    // code goes here  
    let anArray = str.split('');
    let suma = 0;
    let finalResult = 0;
    let contletters = 0;
    for(let i = 0; i<anArray.length; i++){
      if(Number.isInteger(parseInt(anArray[i]))){
        suma += parseInt(anArray[i]);
      }
      if((str.charCodeAt(i) <= 90 && str.charCodeAt(i) >= 65) || (str.charCodeAt(i) <= 122 && str.charCodeAt(i) >= 97)){
        contletters++;
      }
      finalResult = suma/contletters;
    }
    return Math.round(finalResult); 
  
}