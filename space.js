
function forfor(size, callback) {
	for (var i = 0; i <= size.width; i++) {
		for (var j = 0; j <= size.height; j++) {
			callback;
		}
	}
}

function call(callback) {
	console.log(callback);
}

function main() {
	var size = {width: 9, height: 9};
	
	forfor(size, call);
}

//TEST
main