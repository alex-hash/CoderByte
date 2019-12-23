function KUniqueCharacters(str) { 

    // code goes here  
    let cont = parseInt(str[0]);
    let aux = 0;
    let anArray = [];
    let finalArray = [];
    let pos = 0;
    for(let i=1; i<str.length; i++){
      if(anArray.includes(str[i])){
        anArray.push(str[i]);
      }else{
        if(aux === cont - 1){
          pos = i;
        }
        if(aux < cont){
          anArray.push(str[i]);
          aux++;
        }else{
          finalArray.push(anArray);
          anArray = [];
          aux = 0;
          i = pos - 1;
        }
      }
    }
    finalArray.push(anArray);
    let auxAnArray=[];
    for(let j=0; j < finalArray.length; j++){
      if(auxAnArray.length < finalArray[j].length){
        auxAnArray = finalArray[j];
      }
    }
    return auxAnArray.join('');
  }
     
     
  // keep this function call here 
  console.log(KUniqueCharacters("1aabb"));