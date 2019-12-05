function CaesarCipher(str,num) { 

    // code goes here  
    let array = [];
    for(let i=0; i<str.length; i++){
      let letter = str.charCodeAt(i);
      if((letter >= 65 && letter <= 90) || (letter >= 97 && letter <=122)){
        for(let j=0; j<num; j++){
          letter++;
          if(letter === 91){
            letter = 65;
          }
          if(letter === 123){
            letter = 97;
          }
        }
      }
      letter = String.fromCharCode(letter);
      array.push(letter);
    }
    array = array.join("");
    return array; 
  
  }