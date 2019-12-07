function MostFreeTime(strArr) {
  // code goes here
  const anArray = [];
  let bestdifference = 0;
  for (const element of strArr) {
    let hours = element.split("-");
    anArray.push(StrinToObjectHour(hours[0]).total);
    anArray.push(StrinToObjectHour(hours[1]).total);
  }
  anArray.sort((a, b) => {
    return a - b;
  });
  for (let i = 1; i < anArray.length; i = i + 2) {
    let aux = anArray[i + 1] - anArray[i];
    if (bestdifference < aux) {
      bestdifference = aux;
    }
  }
  return MinutesToHours(bestdifference);
}

function MinutesToHours(total) {
  let minutos = 0;
  let horas = 0;
  while (total > 0) {
    if (total >= 60) {
      horas++;
      total = total - 60;
    } else {
      minutos = total;
      total = 0;
    }
  }
  horas = horas < 10 ? "0" + horas : horas;
  minutos = minutos < 10 ? "0" + minutos : minutos;
  return `${horas}:${minutos}`;
}

function StrinToObjectHour(str) {
  let hour = str.split(":");
  hour = {
    hora: parseInt(hour[0]),
    minuto: parseInt(hour[1].slice(0, -2)),
    ampm: hour[1].substring(2),
    total: hour[0] * 60 + parseInt(hour[1].slice(0, -2))
  };
  if (hour.hora === 12 && hour.ampm === "AM") {
    hour.total = hour.minuto;
  }
  if (hour.hora !== 12 && hour.ampm === "PM") {
    hour.total = (hour.hora + 12) * 60 + hour.minuto;
  }
  return hour;
}
