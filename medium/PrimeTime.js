function PrimeTime(num) { 

    // code goes here 
    for(let i=2; i < num; i++){
      if(num%i === 0){
        return false;
      }
    }
    return true;
  
  }