function StockPicker(arr) { 

    // code goes here  
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j] > arr[i] && (arr[j] - arr[i] > total)){
                total = arr[j] - arr[i];
            }
        }
        
    }
    return total; 
  
  }

  console.log(StockPicker([44, 30, 24, 32, 35, 30, 40, 38, 15]));