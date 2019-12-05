function PalindromeTwo(str) { 

    // code goes here
    var splitArray = str.replace(/[^A-Z0-9]/ig, "").toLowerCase().split("").reverse();
    var uf = str.replace(/[^A-Z0-9]/ig, "").toLowerCase().split("");
    
    for(let i = 0; i<uf.length ; i++){
      if(splitArray[i] !== uf[i]){
        return false;
      }
    }
    
    return true; 
  
  }