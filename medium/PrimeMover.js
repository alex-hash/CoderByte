function PrimeMover(num) { 
    let cont = 1;
    for(let i=3; i<=10000; i++){
      let flag = 0;
      if(num === 1){
        return 2;
      }
      for(let j=2; j<i; j++){
        if(i%j === 0){
          flag++;
        }
      }
      if(flag === 0){
        cont++;
      }
      if(cont === num){
        return i;
      }
    }
  }