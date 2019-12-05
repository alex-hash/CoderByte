function BinaryConverter(str) { 

    // code goes here  
    let arr = str.split("");
    let reversed = arr.reverse();
    let acc = 0;
    for(let i=0; i<arr.length; i++){
      if(parseInt(reversed[i]) === 1){
        acc+= Math.pow(2, i);
      }
    }
    
    return acc;
  
}
