function AlphabetSoup(str) { 

    // code goes here  
    var splitarray = str.split("");
    str = splitarray.sort();
    str = str.join("");
    return str; 
           
}