function DashInsertII(num) { 

    // code goes here  
    let anarray = (''+num).split('');
    let finalarray = [];
    for(let i = 0; i<anarray.length-1; i++){
      let par = 0;
      let impar = 0;
      let cero = 0;
      if(parseInt(anarray[i]) === 0){
        cero++;
      }else if((parseInt(anarray[i])% 2) === 0){
        par++;
      }else{
        impar++;
      }
      if(parseInt(anarray[i+1]) === 0){
        cero++;
      }else if((parseInt(anarray[i+1])%2) === 0){
        par++;
      }else{
        impar++;
      }
      if(par===2){
        finalarray.push(anarray[i]);
        finalarray.push('*');
      }else if(impar === 2){
        finalarray.push(anarray[i]);
        finalarray.push('-');
      }else{
        finalarray.push(anarray[i]);
      }
      if(i===(anarray.length-2)){
        finalarray.push(anarray[i+1]);
      }
    }
    return finalarray.join(''); 
  
  }