import { strict as assert} from 'node:assert';

function binarySearch(sortedNumberArray, targetNumber, startIndex=0, endIndex=sortedNumberArray.length-1) {
	let mid = Math.floor((endIndex + startIndex)/2);
	if (targetNumber == sortedNumberArray[mid]) {
		return mid;
	} else if (endIndex <= startIndex) {
		return -1;
	} else if (targetNumber < sortedNumberArray[mid]) {
		return binarySearch(sortedNumberArray, targetNumber, startIndex, mid-1)
	} else {
		return binarySearch(sortedNumberArray, targetNumber, mid+1, endIndex)
	}
}
  
// https://www.techiedelight.com/binary-search/
assert.equal(binarySearch([2,3,5,7,9], 7), 3)
assert.equal(binarySearch([1,4,5,8,9], 2), -1)

