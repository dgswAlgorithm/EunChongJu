/* 
 * N개의 정수가 일렬로 놓여져 있을 때 연속된 구간의 합이 가장 큰 구간을 찾으라.
 * 
 * 테스트 할 것은 3개의 원소를 한 구간으로 칠 때
 * 연속된 배열의 구간 중에 합이 가장 큰 것을 찾는 것이다.
 * 
 */

function makeArrayToRandomElement(len, min, max) {
	var arr = new Array(len);
	for (var i = 0; i < len; i++) {
		arr[i] = parseInt(random(min, max));
	}
	return arr;
}

function random(min,max) {
	return Math.random() * (max - min) + min;
}

function findBiggestSection(arr,sec) {
	var max = 0;
	var maxIndex = 0;
	for (var i = 0; i < arr.length-sec; i++) {
		var sum = 0;
		for (var j = 0; j < sec; j++) {
			sum += arr[i+j];
		}
		if (sum > max){
			maxIndex = i-1;
			max = arr[i];
		}
	}
	return maxIndex;
}

function main() {
//	var arr = makeArrayToRandomElement(10, 0, 10);
	var arr = [0,0,2,0,0,3,5,8];
	console.log(arr);
	
	console.log(findBiggestSection(arr,3));
	
}

main();
