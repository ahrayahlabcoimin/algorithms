import { strict as assert} from 'node:assert';

function binarySearch(arr, target, start=0, end=arr.length-1) {
	let mid = Math.floor((end + start)/2);
	if (target == arr[mid]) {
		return mid;
	} else if (end <= start) {
		return -1;
	} else if (target < arr[mid]) {
		return binarySearch(arr, target, 0, mid-1)
	} else {
		return binarySearch(arr, target, mid+1, end)
	}
}
  
// https://www.techiedelight.com/binary-search/
assert.equal(binarySearch([2,3,5,7,9], 7), 3)
assert.equal(binarySearch([1,4,5,8,9], 2), -1)

