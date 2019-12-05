function FibonacciChecker(num) { 

    // code goes here  
    const array = [0,1];
    while(num > array[array.length-1]){
      const valor = array[array.length-1] + array[array.length - 2];
      array.push(valor);
    }
    for(let i = 0; i < array.length; i++){
      if(array[i] === num){
        return "yes";
      }
    }
    return "no"; 
  
}