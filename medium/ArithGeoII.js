function ArithGeoII(arr) { 

    // code goes here  
    let arith = 0;
    let geo = 0;
    let what = arr[1] - arr[0];
    let what2 = arr[1] / arr[0];
    for(let i=0; i<(arr.length -1); i++){
      if((arr[i] + what) === arr[i+1]){
        arith++;
      }
      if((arr[i] * what2) === arr[i+1]){
        geo++;
      }
    }
    if(geo === (arr.length - 1)){
      return "Geometric";
    }else if(arith === (arr.length - 1)){
      return "Arithmetic"
    }else{
      return -1;
    }
  
  }
