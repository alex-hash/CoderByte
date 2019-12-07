function LookSaySequence(num) {
  // code goes here
  num = num.toString();
  const anArray = num.split("");
  let actual = num[0];
  let iterador = 0;
  let final = "";
  for (let i = 0; i <= anArray.length; i++) {
    if (anArray[i] === actual) {
      iterador++;
    } else {
      final = final + iterador;
      final = final + actual;
      actual = num[i];
      iterador = 1;
    }
  }
  return parseInt(final);
}
