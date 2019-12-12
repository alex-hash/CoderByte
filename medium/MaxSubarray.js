function MaxSubarray(arr) { 

    // code goes here  
    // i -> suma
    let total = arr[0];
    let acc = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            for (let v = j; v < i+1; v++) {
                acc += arr[v];
            }
            if(acc > total){
                total = acc;
            }
            acc = 0;
        }
    }
    if(total<=0){
        return Math.max(...arr);
    }
    return total; 
  
  }

  console.log(MaxSubarray([-4, 2, 3, -5, 1, 2, -4, 2]));