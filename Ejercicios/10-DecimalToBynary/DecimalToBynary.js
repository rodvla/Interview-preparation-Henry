function DecimalToBynary (num) {
  // Your code here:
  if (num==0) {
    return '0';
  }
  var vector= [];
  while (num >= 1) {
   vector.unshift(num%2);
   num = (num - num%2) / 2;
  }
  return vector.join('');
}

module.exports = DecimalToBynary
