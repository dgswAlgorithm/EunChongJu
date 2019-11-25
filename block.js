

function f(n) {
	if (n == 1) {
		return 1;
	}
	else if (n == 2) {
		return 3;
	}
	else {
		return f(n-1) + 2*f(n-2);
	}
}


function main() {
	console.log(f(6));	// 1: 1, 2: 3, 3: 5, 4: 11, 5: 21, 6: 43
}

main();