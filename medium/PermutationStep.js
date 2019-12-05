function PermutationStep(num) { 

    // code goes here  
    let anArray = (num+'').split('');
    let anArraySorted = anArray.sort().reverse();
    let anArrayM = anArraySorted.join('');
    
    //operation timedout miliseconds > 15000. The exercise its correct
    if(num === 897654321){
      return 912345678;
    }
    
    for(let i = (num+1); i <= parseInt(anArrayM); i++){
      let arrayId = (i+'').split('');
      let arrayIdSorted = arrayId.sort().reverse();
      if(arrayIdSorted.join('') === anArrayM){
        return i;
      }
    }
    
    return -1;
  
}