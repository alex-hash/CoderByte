function LetterCapitalize(str) { 

    // code goes here  
    var splitarray = str.split(" ");
    var flag = 0;
    var aux = "";
    
    for(var i=0; i<splitarray.length; i++){
      var splitarray2 = splitarray[i].split("");
      splitarray2[0] = splitarray2[0].toUpperCase();
      if(flag = 0){
        aux = splitarray2.join("");
        flag++;
      }else{
        aux = aux + " " + splitarray2.join("");
      }
    }
    str = aux;
    return str; 
           
}