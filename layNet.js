/* 
 * 그물 치고 최대로 잡는 게임(?)
 * 
 * 1. 먼저 100개의 배열에 각각의 칸에 랜덤으로 0에서부터 10까지 아무나 집어넣는다
 * 2. 그리고 0부터 99까지의 범위 내에 3칸씩 그물을 던져 물고기를 잡는다. (1부터 하면 3까지 잡는다고 가정할 때, 1~3부터 97~99까지 가능하다.)
 * 3. 그걸 0부터 99까지 그 범위 내에 반복한다.
 * 4. 그중에 제일 많이 잡힌 물고기의 수와 범위를 출력하고 끝난다.
 * 
 */

function makeArray(num) {
	var arr = new Array(num);
	
	for (var i = 0; i < num; i++) {
		arr[i] = i;
		console.log(arr[i]);
	}
	
	return ;
}

function randomSet() {
	return (Math.floor(Math.random() * 100 + 1));
}

function net() {
	
}

function main() {
	var arr = makeArray(100);
	console.dir(arr);
}

//TEST
main();

