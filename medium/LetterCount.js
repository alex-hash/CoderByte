function LetterCount(str) { 

    // code goes here  
    let palabras = str.split(" ");
    let bestword = "";
    let contletterrepeated = 0;
    palabras.forEach(element =>{
      let palabra = element.split("");
      let arrayP = [];
      let flag = 0;
      let repeatedLetter = 0;
    
      for(let i = 0; i < palabra.length; i++){
        for(let j=0; j < arrayP.length; j++){
          if(palabra[i] === arrayP[j]){
            flag++;
          }
        }
        if(flag!==0){
          continue;
        }
        for(let index = (i+1); index < palabra.length; index++){
          if(palabra[i] === palabra[index]){
            repeatedLetter++;
          }
        }
        arrayP.push(palabra[i]);
      }
      if(repeatedLetter > contletterrepeated){
        bestword = palabra.join('');
        contletterrepeated = repeatedLetter;
      }
      
    });
    
    if(contletterrepeated >0){
      return bestword
    }else{
      return -1
    }
  
  }