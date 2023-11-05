const sumItems = (array) => {
  let sum = 0;

  for (const num of array) {
    if (Array.isArray(num)) {
      // if there's a sub array, sum += recursion
      sum += sumItems(num);
    } else {
      sum += num;
    }
  }
  
  return sum;
};

module.exports = sumItems;