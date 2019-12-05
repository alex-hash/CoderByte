function PrimeChecker(num) { 

    // code goes here  
    let arrayNum = num.toString().split('');
    let arrayJoin = permutacion(arrayNum, "", arrayNum.length, arrayNum.length, []);
    let unique = [...new Set(arrayJoin)];
    for(let i = 0; i<unique.length; i++){
      const element = parseInt(unique[i]);
      if(isPrime(element)){
        return 1;
      }
    }
    return 0;
  
  }
  
  function permutacion(array, actual, n, r, arrayJoin){
    if(n===0){
      arrayJoin.push(actual);
    }else{
      for(let i = 0; i<r; i++){
        let arraycopied = [...array];
        arraycopied.splice(i,1);
        permutacion(arraycopied, actual + array[i] + "", n-1, r-1, arrayJoin);
      }
    }
    return arrayJoin;
  }
  
  function isPrime(num){
    for(let i = 2; i< num; i++){
      if(num%i === 0){
        return false;
      }
    }
    return num>1;
  }