
// Library Function
function makeUpTwiceArray(w,h) {
	var arr = new Array(w);
	
	for (var i = 0; i <= w; i++) {
		arr[i] = new Array(h);
	}
	
	return arr;
}


// Function
function visit(i, j) {
	m[i][j] = 1;
	cnt++;
	
	// NEWS
	if (m[i][j+1] == 0) {
		visit(i,j+1);
	}
	if (m[i+1][j] == 0) {
		visit(i+1,j);
	}
	if (m[i][j-1] == 0) {
		visit(i,j-1);
	}
	if (m[i-1][j] == 0) {
		visit(i-1,j);
	}
	if (m[i-1][j] == 3) {
		console.log("탐색 완료");
	}
}

function main() {
	visit(1,1);	//start
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++){
			console.log(m[i][j]);
		}
		console.log("\n");
	}
	console.log(cnt);
	return 0;
}


// TEST
var cnt = 0;
var m = [
	[2,2,2,2,2,2,2,2,2,2],
	[2,0,0,0,0,0,0,0,0,2],
	[2,0,0,0,0,0,0,0,0,2],
	[2,0,2,2,2,2,2,2,2,2],
	[2,0,0,0,0,2,0,2,0,2],
	[2,0,3,2,0,2,0,2,0,2],
	[2,0,0,0,0,2,0,2,0,2],
	[2,0,2,2,2,2,0,2,0,2],
	[2,0,0,0,0,0,0,0,0,2],
	[2,2,2,2,2,2,2,2,2,2],
];

main();