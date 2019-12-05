function LongestWord(sen) { 

    // code goes here  
    var splitarray = sen.split(" ");
    var lg = 0;
    
    for(var i = 0; i < splitarray.length; i++){
      var aux = splitarray[i].split("");
      var lt = 0;
      for(var j = 0; j < aux.length; j++){
        if(aux[j].toLowerCase() != aux[j].toUpperCase()){
          lt++;
        }
      }
      if(lt == 0){
        lt = splitarray[i].length;
      }
      if(lt > lg){
        lg = lt;
        sen = splitarray[i];
      }
    }
    return sen; 
           
  }