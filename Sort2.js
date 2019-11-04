/* 
 * Javascript는 C언어에 기본적으로 있는 라이브러리인 <time.h> 같은 놈이 없어서 그냥 안된다고 봐야할지도
 * 
 * 새 버전인 Sort2.js는 자바스크립트에 최적화된 코딩이 나옵니다.
 * 
 */


function newArray(size) {
	var arr = new Array(size);
	return arr;
}

const MAX_SIZE = 60000;
const SWAP = (x,y,t) => {	//SWAP Function
	t = x;
	x = y;
	y = t;
	return { x: x, y: y, t: t };
};

var original = newArray(MAX_SIZE);
var list = newArray(MAX_SIZE);
var n;
var sorted = newArray(MAX_SIZE);

/*clock_t*/var start, finish, used_time = 0;

//합병 정렬
function merge(list, left, mid, right) {
	
}

//퀵정렬
function partition(list, lef, right) {
	var pivot = list[left], tmp, low = left, high = right + 1, getValues;
	
	do {
		do {
			low++;
		} while (low <= right && list[low] < pivot);
		
		do {
			high--;
		} while (high >= left && list[high] > pivot);
		
		if (low < high) {
			getValues = SWAP(list[left], list[right], tmp);
			list[left] = getValues.x;
			list[right] = getValues.y;
			tmp = getValues.t;
		}
	}
	while (low < high);
	
	getValues = SWAP(list[left], list[right], tmp);
	list[left] = getValues.x;
	list[right] = getValues.y;
	tmp = getValues.t;
	
	return high;
}
function quick_sort(list, left, right) {
	if (left < right) {
		var q = partition(list, left, right);
		quick_sort(list, left, q - 1);
		quick_sort(list, q + 1, right);
	}
}

//버블 정렬
function bubble_sort(list, n) {
	
}

function main() {
	var i;
//	srand((usigned int)time(NULL));
	n = MAX_SIZE;
	for (var i = 0; i < n; i++) {
		original[i] = Math.floor(Math.random() * 100 + 1);
	}
	
	console.log();
	
	
	//퀵 정렬
	start = clock();
	console.log("퀵 정렬 중...");
	quick_sort(list, 0, n);
	finish = clock();
	CalcTime();
}

function CalcTime() {
	used_time = finish - start;
	console.log("완료!\n소요시간 : " + parseFloat(used_time / CLOCKS_PER_SEC) + "sec\n\n");
}

//TEST
main();
