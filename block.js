

function f(n) {
	if (n == 1) {
		return 1;
	}
	else if (n == 2) {
		return 3;
	}
	else if (n % 2 == 0) {
		return ((n/2) * f(2));
	}
	else {
		return f(n-1) + 2*f(n-2);
	}
}


function main() {
	console.log(f(3));
}

main();