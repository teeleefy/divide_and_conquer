// function sortedFrequency(arr, value) {
//   const set = new Set(arr);
//   if (set.has(value)) {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;
//     while (leftIndex <= rightIndex) {
//       let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//       let middleNumber = arr[middleIndex];
//       if (
//         middleNumber === value
//       ) {
//         leftIndex = middleIndex - 1;
//         rightIndex = middleIndex + 1;
//       } else if (middleNumber > value) {
//         rightIndex = middleIndex - 1;
//       } else {
//         leftIndex = middleIndex + 1;
//       }
//     }
//     console.log(`Left Index is ${leftIndex}`);
//     console.log(`Right Index is ${rightIndex}`);
//     console.log(`Middle Index is ${middleIndex}`);
//     console.log(`Middle Number is ${middleNumber}`);
//     return rightIndex - leftIndex;
//   }
//   return -1;
// }
//AFTER SEVERAL ATTEMPTS, HAD TO STUDY SOLUTION TO UNDERSTAND ANSWER


function sortedFrequency(arr, num) {
  let firstIdx = findFirst(arr, num);
  if (firstIdx == -1) return firstIdx;
  let lastIdx = findLast(arr, num);
  return lastIdx - firstIdx + 1;
}

function findFirst(arr, num, leftIndex = 0, rightIndex = arr.length - 1) {
  if (rightIndex >= leftIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if ((middleIndex === 0 || num > arr[middleIndex - 1]) && arr[middleIndex] === num) {
      return middleIndex;
    } else if (num > arr[middleIndex]) {
      return findFirst(arr, num, middleIndex + 1, rightIndex)
    } else {
      return findFirst(arr, num, leftIndex, middleIndex - 1)
    }
  }
  return -1
}

function findLast(arr, num, leftIndex = 0, rightIndex = arr.length - 1) {
  if (rightIndex >= leftIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if ((middleIndex === arr.length - 1 || num < arr[middleIndex + 1]) && arr[middleIndex] === num) {
      return mid;
    } else if (num < arr[middleIndex]) {
      return findLast(arr, num, leftIndex, middleIndex - 1)
    } else {
      return findLast(arr, num, middleIndex + 1, rightIndex)
    }
  }
  return -1
}



module.exports = sortedFrequency;
