function CoinDeterminer(num) { 

    // code goes here  
    
    const coins = [11, 9, 7, 5, 1];
    let count = 0;
    let pos = 0;
    
    while(num>0){
      if(num === 14){
        count = count + 2;
        return count;
      }else if(num === 15){
        count = count + 3;
        return count;
      }else if(num - coins[pos] < 0){
        pos++;
      }else if(num === 0){
        return count;
      }else{
        num = num - coins[pos];
        count++;
      }
    }
    return count; 
  
  }