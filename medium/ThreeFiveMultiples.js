function ThreeFiveMultiples(num) { 

    // code goes here  
    const anArray = [];
    let total = 0;
    
    for(let i=num-1; i>1; i--){
      if(i%5 === 0 || i%3 === 0){
        anArray.push(i);
      }
    }
    for(let i = 0; i<anArray.length; i++){
      total += anArray[i];
    }
    return total; 
  
  }