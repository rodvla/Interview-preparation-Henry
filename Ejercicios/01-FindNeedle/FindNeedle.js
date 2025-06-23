function FindNeedle(haystack, needle) {
  if (needle.length === 0) return 0;
  if (needle.length > haystack.length) return -1;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let found = true;

    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        found = false;
        break;
      }
    }

    if (found) {
      return i;
    }
  }

  return -1;
}
console.log(FindNeedle('react-redux', 'redux')) // to.equal(6)
console.log(FindNeedle('pinky', 'puntual')) // to.equal(-1)
console.log(FindNeedle('rereredux', 'reredux')) // to.equal(2)

module.exports = FindNeedle
