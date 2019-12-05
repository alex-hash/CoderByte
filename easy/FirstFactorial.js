function FirstFactorial(num) { 

    // code goes here   
    var factorial = 1;
    for (var i=1; i<=num; i++) {
      factorial = factorial * i;
    }
    num = factorial;
    return num; 
           
}