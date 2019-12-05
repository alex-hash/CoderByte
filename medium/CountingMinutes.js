
function CountingMinutes(str) { 

    // code goes here  
    let hours = str.split("-");
    const hour1 = StringToObjectHour(hours[0]);
    const hour2 = StringToObjectHour(hours[1]);
    let minutos = 0;
    
    if(hour1.total <= hour2.total){
      minutos = hour2.total - hour1.total;
    }else{
      minutos = 1440 - (hour1.total - hour2.total);
    }
    return minutos; 
  
  }
  
  function StringToObjectHour(str){
    let hour = str.split(':');
    hour = {
      hora: parseInt(hour[0]),
      minuto: parseInt(hour[1].slice(0,-2)),
      ampm: hour[1].substring(2),
      total: hour[0] * 60 + parseInt(hour[1].slice(0, -2))
    };
    if(hour.hora === 12 && hour.ampm === 'am'){
      hour.total = hour.minuto;
    }
    if(hour.hora !== 12 && hour.ampm === 'pm'){
      hour.total = (hour.hora +12)*60 + hour.minuto;
    }
    return hour;
  }
