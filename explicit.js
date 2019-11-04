
var list = [
	{
		name: 'A',
		kg: 3,
		value: 4
	},
	{
		name: 'B',
		kg: 4,
		value: 5
	},
	{
		name: 'C',
		kg: 7,
		value: 10
	},
	{
		name: 'D',
		kg: 8,
		value: 11
	},
	{
		name: 'E',
		kg: 9,
		value: 13
	},
];

//console.log(list[0].name);

//library function
function sizeof(arr) {
	return arr.length;
}

function makeUpTwiceArray(w,h) {
	var arr = new Array(w);
	
	for (var i = 0; i <= w; i++){
		arr[i] = new Array(h);
	}
	
	return arr;
}

//function
function max(a,b) {
	return (a>b) ? a : b;
}

function knapSack(W, wt, val, n) {	// int W, int wt[], int val[], int n
	var K = makeUpTwiceArray(n+1,W+1);
	
	for (var i = 0; i <= n; i++) {
		for (var w = 0; w <= W; w++) {
			if (i == 0 || W == 0) {
				K[i][w] = 0;
			}
			else if (wt[i - 1] <= w) {
				K[i][w] = max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
			}
			else {
				K[i][w] = K[i - 1][w];
			}
		}
	}	
	return K[n][W];
}

function main() {
	var val = [60, 100, 120];
	var wt = [10, 20, 30];
	var W = 50;
	var n = val.length;
	
	console.log("최대값은 " + knapSack(W, wt, val, n));
}

//Test Zone
main();
