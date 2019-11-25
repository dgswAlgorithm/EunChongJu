var coins = [1,2,4,8,16];


function numberOfCase(num) {
	if (num == 1) {
		return num;
	}
	else {
		return num + numberOfCase(num-1);
	}
}

function coinOfCase(coin) {
	
}

function main() {
	console.log(coins);
	
	var numOfCase = 3;
	var result = numberOfCase(numOfCase);
	
	console.log(result);
}

// TEST
main();
