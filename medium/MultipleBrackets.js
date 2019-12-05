function MultipleBrackets(str) { 

    // code goes here  
    
    
    const array =  str.split("");
    let flagParentesisA = 0;
    let flagParentesisB = 0;
    let flagCorcheteA = 0;
    let flagCorcheteB = 0;
    for(let i = 0; i <array.length; i++){
      if(array[i] === "("){
        flagParentesisA++;
      }
      if(array[i] === ")"){
        flagParentesisB++;
        if(flagParentesisA < flagParentesisB){
          return 0;
        }
      }
      if(array[i] === "["){
        flagCorcheteA++;
      }
      if(array[i] === "]"){
        flagCorcheteB++;
        if(flagCorcheteA < flagCorcheteB){
          return 0;
        }
      }
    }
    if(flagCorcheteA===0&&flagCorcheteB===0&&flagParentesisA===0&&flagParentesisB===0){
      return 1;
    }else if(flagCorcheteA===flagCorcheteB&&flagParentesisA===flagParentesisB){
      return `1 ${flagCorcheteA+flagParentesisA}`;
    }else{
      return 0;
    }
  
}