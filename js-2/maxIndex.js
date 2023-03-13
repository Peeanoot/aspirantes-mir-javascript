function maxIndex(numbers) {
    if (numbers.length === 0) {
      return -1;
    }
    let maxIndex = 0;
    let maxValue = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxValue) {
        maxValue = numbers[i];
        maxIndex = i;
      }
    }
    return maxIndex;
  }

console.log(maxIndex([1, 3, 2]))
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4]))
console.log(maxIndex([]))