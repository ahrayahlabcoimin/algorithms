import { strict as assert} from 'node:assert';

function binarySearch(sortedNumberArray, targetNumber) {
	let startIndex = 0;
	let endIndex = sortedNumberArray.length - 1;
	let index = -1;
	while(startIndex < endIndex) {
		let mid = Math.floor((endIndex + startIndex)/2);
		if (targetNumber == sortedNumberArray[mid]) {
			index = mid;
			break;
		} else if (targetNumber < sortedNumberArray[mid]) {
			endIndex = mid - 1;
		} else {
			startIndex = mid + 1;
		}
	}
	return index;
}
  
// https://www.techiedelight.com/binary-search/
assert.equal(binarySearch([2,3,5,7,9], 7), 3)
assert.equal(binarySearch([1,4,5,8,9], 2), -1)

