function NumberEncoding(str) {
  // code goes here
  const anArray = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122) {
      const element = str[i].charCodeAt(0) - 96;
      anArray.push(element);
    } else {
      anArray.push(str[i]);
    }
  }
  return anArray.join("");
}
