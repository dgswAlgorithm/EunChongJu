/* 
 * 정수 배열이 주어졌을때, 배열 내의 모든 0을 배열의 뒷부분으로 옮기시오.
 * 
 * 단, 0을 제외한 원소들의 순서는 유지되어야 합니다.
 * 
 * Input: [6,0,8,2,3,0,4,0,1]
 * Output: [6,8,2,3,4,1,0,0,0]
 * 
 */

function sendToZero(arr) {
	var arr = addZero(removeZero(arr),findToHowManyZero(arr));
	
	arr.forEach(element => console.log(element));
}

function findToHowManyZero(arr) {
	var num = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] ==0) {
			num++;
		}
	}
	return num;
}

function addZero(arr, num) {
	for (var i = 0; i < num; i++) {
		arr.push(0);
	}
	return arr;
}

function removeZero(arr) {
	return arr.filter(function(el) {
		return el != 0;
	});
}



function main() {
	var arr = [6,0,8,2,3,0,4,0,1];
	
	sendToZero(arr);
}

main();



