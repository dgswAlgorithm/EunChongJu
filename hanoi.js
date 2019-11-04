
// 하노이 타워 게임
// 하노이 게임의 구성은 임의의 원판 갯수와 3개의 기둥이 있다.
// 
// 하노이 타워의 게임의 구성은 재귀함수가 이용된다.
// 하노이 게임의 구성은 n가 1이면 걍 반대쪽으로 옮기면 되고
// 1이 아닌 (n-1)이면 그걸 옮길 수 있게 같은 함수를 호출한다.

// Library Function

//return value
function from(arr) {
	return arr[0];
}
function tmp(arr) {
	return arr[1];
}
function to(arr) {
	return arr[2];
}
let from = (arr) => return arr[0];
//	from = arr[0];
//	tmp = arr[1];
//	to = arr[2];

// function
function hanoi_tower(n, from, tmp, to) {
	if (n == 1) {
		console.log("원판 1을 " + from + "에서 " + to + "으로 옮긴다.");
	}
	else {
		hanoi_tower(n-1, from, to, tmp);
		console.log("원판 " + n + "을 " + from + "에서 " + to + "으로 옮긴다.");
		hanoi_tower(n-1, tmp, from, to);
	}
}

function hanoi(n, arr) {
	
	from = arr[0];
	tmp = arr[1];
	to = arr[2];
	
	if (n == 1) {
		console.log("원판 1 : " + from + " -> " + to + " move.");
	}
	else {
		hanoi(n-1, [from, to, tmp]);
		console.log("원판 " + n + " : " + from + " -> " + to + " move.");
		hanoi(n-1,[tmp,from,to]);
	}
}

function main() {
	hanoi_tower(3, 'A', 'B', 'C');
	console.log("New Upgrade Version.");
	hanoi(3, ['A', 'B', 'C']);
}


//TEST
main();
