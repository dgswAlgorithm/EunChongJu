
var n;
//var col[256] = {0,}; // row, col
var col = new Array(256);

function abs(num) {
	return ((num < 0) ? num *= -1 : num);
}

function main() {
	console.log("How many Queens?");
	
	n = 4;	// input("%d", &n);
	
	queens(0);
}

function queens(i) {
}

function queens(i) {
	if (promising(i)) {
		if (i == n) {
			printResult();
		}
		else {
			for (var j = 0; j <= n; j++) {
				col[i + 1] = j;
				queens(i+1);
			}
		}
	}
}

function printResult() {
	console.log("result : ");
	for (var i = 1; i <= n; i++) {
		console.log(col[i]);
	}
	return;
}


function promising(i) {
	var k = 1, promising = 1;
	while ((k < i) && promising) {
		if (col[i] == col[k] || abs(col[i] - col[k]) == abs(i - k)) {
			promising = 0;
		}
		k++;
	}
	return promising;
}


// TEST
main();