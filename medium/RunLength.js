function RunLength(str) { 

    // code goes here  
    let cont = 1;
    let finalStr = "";
    
    for (let i = 0; i < str.length; i++) {
      if(str[i] === str[i+1]){
        cont++;
      }else{
        finalStr += cont;
        finalStr += str[i];
        cont = 1;
      }
    }
    return finalStr;
  
  }