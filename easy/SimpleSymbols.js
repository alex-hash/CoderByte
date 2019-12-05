function SimpleSymbols(str) { 

    // code goes here  
    var splitarray = str.split("");
    var flag = 0;
    var flag1 = 0;
    
    for(var i=0; i<splitarray.length; i++){
      if(splitarray[i].toUpperCase() != splitarray[i].toLowerCase()){
        flag1++;
        if(i!=0 && i!=(splitarray.length-1)){
          if(splitarray[i-1].charCodeAt(0) == 43 && splitarray[i+1].charCodeAt(0) == 43){
            flag++;
          }
        }
      }
    }
    if(flag == flag1)
      return "true";
    else
      return "false";
           
}