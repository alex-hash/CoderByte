function Consecutive(arr) { 

    // code goes here 
    const arrayordered = arr.sort(function(a,b){
      return a-b;
    });
    let result = 0;
    for(let i=0; i<arr.length-1; i++){
      const need = arrayordered[i+1] - arrayordered[i];
      result += need-1;
    }
    return result; 
  
}