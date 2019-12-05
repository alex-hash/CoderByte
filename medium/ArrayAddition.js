function ArrayAddition(arr) { 

    // code goes here  
    let maximo = Math.max.apply(0, arr);
    arr.sort(function(a,b){ return a-b;}).pop();
    let acc = 0;
    
    for(let i = 0; i < arr.length; i++){
      acc+= arr[i];
      for(let j = 0; j< arr.length; j++){
        if(i!=j){
          acc+= arr[j];
          if(acc === maximo){
            return true;
          }
        }
      }
      for(let x = 0; x < arr.length; x++){
        if(i!=x){
          acc -= arr[x];
          if(acc === maximo){
            return true;
          }
        }
      }
      acc = 0;
    }
    return false;
    
}
     