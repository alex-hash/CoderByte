function MissingDigit(str) { 

    // code goes here
    const op = str.split(" ");
    let valor = 0;
    var invoperator = {
      '-': function (x, y) { return x + y },
      '+': function (x, y) { return x - y },
      '*': function (x, y) { return x / y },
      '/': function (x, y) { return x * y },
    };
    for(let i=0; i<op.length; i = i+2){
      if(op[i].includes('x')){
        valor = i;
      }
    }
    let number = 0;
    let trozo = op[valor];
    if(valor === 0){
      if(parseInt(op[4]) === parseInt(op[2])){
          return 0;
      }
      number = invoperator[op[1]](parseInt(op[4]), parseInt(op[2]));
    }
    if(valor === 2){
      if(parseInt(op[4]) === parseInt(op[0])){
        return 0;
      }
      number = invoperator[op[1]](parseInt(op[4]), parseInt(op[0]));
    }
    if(valor === 4){
      number = eval(`${op[0]} ${op[1]} ${op[2]}`);
    }
    console.log(number);

    for (let j = 0; j < trozo.length; j++) {
        if(trozo[j] === 'x'){
            return number.toString()[j];
        }
    }
  
  }

  console.log(MissingDigit("10 - x = 10"));