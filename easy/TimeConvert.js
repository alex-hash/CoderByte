function TimeConvert(num) { 

    // code goes here  
    var element1 = 0;
    var element2 = 0;
    for(var i=num; i>0; i=i-60)
      if(i>=60){
        element1++;
        num = num-60;
      }else{
        element2 = num;
      }
    return element1+":"+element2; 
           
}