function findPivot(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let firstNumber = arr[0];
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    let middleNumber = arr[middleIndex];
    let nextMiddleNumber = arr[middleIndex + 1];
    if (middleNumber > nextMiddleNumber) {
        console.log(`Pivot point is ${nextMiddleNumber} at index of ${middleIndex +1}`);
        return middleIndex + 1;
    } else if (middleNumber >= firstNumber) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }
}

function findRotatedIndex(arr, value) {
    const set = new Set(arr);
    console.log(set);
    if (set.has(value)) {
        let pivotPoint = findPivot(arr);
        firstLowNumber = arr[pivotPoint];
        let lastNum = arr[arr.length-1];
        let firstNum = arr[0];
        if (value > firstNum){
            let result = binarySearch(arr, value, 0, pivotPoint-1);
            return result;
        } else{
            let result = binarySearch(arr, value, pivotPoint);
            return result;

        }
    }
    else{
        return -1;
    }
}

function binarySearch(arr, val, start = 0, end = arr.length-1) {

  let leftIdx = start;
  let rightIdx = end;

  while (leftIdx <= rightIdx) {
    // find the middle value
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal < val) {
      // middleVal is too small, look at the right half
      leftIdx = middleIdx + 1;
    } else if (middleVal > val) {
      // middleVal is too large, look at the left half
      rightIdx = middleIdx - 1;
    } else {
      // we found our value!
      return middleIdx;
    }
  }
  
  // left and right pointers crossed, val isn't in arr
  return -1;
}

module.exports = findRotatedIndex;
