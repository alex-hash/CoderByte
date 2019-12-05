function LetterChanges(str) { 

    // code goes here  
    var splitarray = str.split(" ");
    var aux = "";
    var flag = 0;
    
    for(var i=0; i<splitarray.length; i++){
      var splitarray1 = splitarray[i].split("");
      for(var j=0; j<splitarray1.length; j++){
        if(splitarray1[j].toLowerCase() != splitarray1[j].toUpperCase()){
          splitarray1[j] = String.fromCharCode(1 + splitarray1[j].charCodeAt(0));
          if((/^[aeiou]$/i).test(splitarray1[j])){
            splitarray1[j] = splitarray1[j].toUpperCase();
          }
        }
      }
      if(flag == 0){
        aux = splitarray1.join("");
        flag ++;
      }else
        aux = aux + " " + splitarray1.join("");
    }
    
    return aux; 
           
}