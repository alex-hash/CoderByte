function FormattedDivision(num1,num2) { 

    // code goes here 
    const division = num1/num2;
    const rest = num1%num2;
    let resultado = 0;
    if(rest === 0){
      return `${division.toLocaleString('en')}.0000`
    }else{
      return `${division.toLocaleString('en', {'minimumFractionDigits':4, 'maximumFractionDigits':4})}`;
    }
    return division; 
  
  }