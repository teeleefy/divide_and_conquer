function countZeroes(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let firstZeroIndex = 0;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    let middleNumber = arr[middleIndex];
    if (middleNumber === 1) {
      leftIndex = middleIndex + 1;
      console.log(`You are at left index ${leftIndex}`);
    } else {
      rightIndex = middleIndex - 1;
      console.log(`You are at right index ${rightIndex}`);
    }
    console.log(`MiddleIndex = ${middleIndex}`);
    console.log("leftIndex is" + leftIndex);
    firstZeroIndex = leftIndex;
  }
  let result = arr.length - firstZeroIndex;
  return result;
}


module.exports = countZeroes;
