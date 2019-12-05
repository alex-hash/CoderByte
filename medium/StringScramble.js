function StringScramble(str1,str2) { 

    // code goes here  
    let split1 = str1.split("");
    let split2 = str2.split("");
    let aux = 0;
    
    for(let i=0; i<split2.length; i++){
      for(let j=0; j<split1.length; j++){
        if(split2[i] === split1[j]){
          split1.splice(j, 1);
          aux++;
          break;
        }
      }
    }
    
    if(aux === split2.length)
      return true;
    else
      return false;
  
  }