const countSetsOfThree = (numbers: number[], threshold: number): number => {
  const sortedNum: number[] = numbers.sort((a: number, b: number) => a - b)
  let count: number = 0;
  for (let i = 0; i < sortedNum.length; i++) {
    let pointer1: number = i + 1;
    let pointer2: number = sortedNum.length - 1; 
    while (pointer1 < pointer2) {
      const currentSum: number = sortedNum[i] + sortedNum[pointer1] + sortedNum[pointer2]
      if (currentSum >= threshold) {
        if (currentSum === threshold) count++;
        pointer2--;
      } else {
        count++;
        pointer1++
      }
    }
  }
  return count
}

console.log(countSetsOfThree([1,2,3,4], 7)) //'2'
console.log(countSetsOfThree([4,1,3,2], 7)) //'2'
console.log(countSetsOfThree([1,2,3,9], 7)) //'1'
console.log(countSetsOfThree([2,2,2,2], 7)) //'4'
console.log(countSetsOfThree([3,3,3,3], 7)) //'0'
console.log(countSetsOfThree([1,2,3,4,5], 7))//'2'


append(`countSetsOfThree([1,2,3,4], 7)`, countSetsOfThree([1,2,3,4], 7), 2);
append(`countSetsOfThree([4,1,3,2], 7)`, countSetsOfThree([4,1,3,2], 7), 2);
append(`countSetsOfThree([1,2,3,9], 7)`, countSetsOfThree([1,2,3,9], 7), 1);
append(`countSetsOfThree([2,2,2,2], 7)`, countSetsOfThree([2,2,2,2], 7), 4);
append(`countSetsOfThree([3,3,3,3], 7)`, countSetsOfThree([3,3,3,3], 7), 0);
append(`countSetsOfThree([1,2,3,4,5], 7)`, countSetsOfThree([1,2,3,4,5], 7), 2);

function append(description: string, actual: number, expected: number) {
  const item = document.createElement('div');
  item.textContent = `${description}. Expected: ${expected}. Actual: ${actual}.`;
  document.querySelector('#results').append(item);
}