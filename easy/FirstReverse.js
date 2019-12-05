function FirstReverse(str) { 

    // code goes here  
    var splitString = str.split("");
    var Rarray = splitString.reverse();
    str = Rarray.join("");
    return str; 
           
  }