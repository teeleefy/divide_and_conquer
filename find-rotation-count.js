function findRotationCount(arr) {
  let firstNum = arr[0];
  let lastNum = arr[arr.length - 1];
  if (firstNum < lastNum) {
    return 0;
  } else {
    let pivotPoint = findPivot(arr);
    return pivotPoint;
  }
}

function findPivot(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let firstNumber = arr[0];
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    let middleNumber = arr[middleIndex];
    let nextMiddleNumber = arr[middleIndex + 1];
    if (middleNumber > nextMiddleNumber) {
      console.log(
        `Pivot point is ${nextMiddleNumber} at index of ${middleIndex + 1}`
      );
      return middleIndex + 1;
    } else if (middleNumber >= firstNumber) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }
}

module.exports = findRotationCount;
