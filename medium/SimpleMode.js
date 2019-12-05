function SimpleMode(arr) { 

    // code goes here  
    let array = [];
    let max = 0;
    let num = 0;
    let flag = 0;
    array.push({num: arr[0], cont: 1});
    for(let i = 1; i<arr.length; i++){
      for(let j = 0; j<array.length; j++){
        flag = 0;
        if(array[j].num === arr[i]){
          array[j].cont++;
        }else{
          flag = 1;
        }
      }
      if(flag===1){
        array.push({num: arr[i], cont: 1});
      }
    }
    for(const element of array){
      if(element.cont > max){
        max = element.cont;
        num = element.num;
      }
    }
    if(max===1){
      return -1;
    }
    return num; 
  
  }