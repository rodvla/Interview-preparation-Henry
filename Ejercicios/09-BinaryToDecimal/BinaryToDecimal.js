function BinaryToDecimal (num) {
  // Your code here:
  var decimal = 0;
  for (let i=0; i < num.length; i++) {
    decimal += ( num[i] * Math.pow(2,num.length-1-i) );
  }
  return decimal
}

module.exports = BinaryToDecimal
