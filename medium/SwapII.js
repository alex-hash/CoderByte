function SwapII(str) { 

    // code goes here  
    let anArray = str.split('');
    let active = 0;
    let aux = 0;
    let pos = 0;
    let countletters = 0;
    for(let i = 0; i<anArray.length; i++){
      if(Number.isInteger(parseInt(anArray[i]))){
        if(active === 0){
          active = 1;
          aux = anArray[i];
          pos = i;
        }else{
          if(countletters === 0){
            pos--;
          }
          if((countletters+pos+1)===i){
            anArray[pos] = anArray[i];
            anArray[i] = aux;
          }
          active = 0;
        }
        countletters = 0;
      }
      if((str.charCodeAt(i) <= 90 && str.charCodeAt(i)>=65) || (str.charCodeAt(i) <= 122 && str.charCodeAt(i)>=97)){
        countletters++;
      }
      if(anArray[i] === anArray[i].toUpperCase()){
        anArray[i] = anArray[i].toLowerCase();
      }else{
        anArray[i] = anArray[i].toUpperCase();
      }
    }
    return anArray.join(''); 
  
  }