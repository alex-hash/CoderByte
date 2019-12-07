function DistinctList(arr) {
  // code goes here
  const anArray = [];
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = anArray.find(elemento => elemento === arr[i]);
    if (element !== undefined) {
      total++;
    } else {
      anArray.push(arr[i]);
    }
  }
  return total;
}
