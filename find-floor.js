function findFloor(arr, value) {
  const set = new Set(arr);
  console.log(set);
  if (set.has(value)) {
    console.log("inside set-if");
    return value;
  } else if (arr[0] > value) {
    console.log("inside else-if");
    return -1;
  } else {
    console.log("inside top of else");
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while (leftIndex <= rightIndex) {
      let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
      let middleNumber = arr[middleIndex];
      let nextMiddleNumber = arr[middleIndex + 1];
      if (
        middleNumber < value &&
        (nextMiddleNumber > value || middleIndex === arr.length - 1)
      ) {
        console.log("inside while-if");
        return middleNumber;
      } else if (middleNumber > value) {
        rightIndex = middleIndex - 1;
      } else {
        leftIndex = middleIndex + 1;
      }
    }
  }
}

module.exports = findFloor;

