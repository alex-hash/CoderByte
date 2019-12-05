function Division(num1, num2) { 

    // code goes here  
    while(num2){
      let aux = num2;
      num2 = num1%num2;
      num1 = aux;
    }
    return num1;
  }