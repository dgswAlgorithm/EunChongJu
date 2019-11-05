/* 
 * Javascript는 C언어로 작성된 코드를 자바스크립트에 초적화되도록 전환함.
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
function quick_sort(list, left, right) {
	
}

//버블 정렬
function bubble_sort(list, n) {
	
}

function main() {
	
	for (var i = 0; i < n; i++) {
		original[i] = Math.floor(Math.random() * 100 + 1);
	}
	
	console.log();
	
	
	//합병 정렬
	console.log("합병 정렬 중...");
	quick_sort(list, 0, n);
	console.log("합병 정렬 완료!");
	
	//퀵 정렬
	console.log("퀵 정렬 중...");
	quick_sort(list, 0, n);
	console.log("퀵 정렬 완료!");
	
	//버블 정렬
	console.log("버블 정렬 중...");
	quick_sort(list, 0, n);
	console.log("버블 정렬 완료!");
}


//TEST
main();
