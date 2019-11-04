
// JavaScript는 그딴거 지원못한다.
// 대신 Web Storage 기술을 활용하여 브라우저에 저장하는 그것을 만들어보았다.


//Library Function
function makeUpTwiceArray(w,h) {
	var arr = new Array(w);
	
	for (var i = 0; i <= w; i++) {
		arr[i] = new Array(h);
	}
	
	return arr;
}

function charAtArray(string) {
	var arr = new Array(string.length);
	
	for (var i = 0; i <= string.length; i++) {
		arr[i] = string.charAt(i);
	}
	
	return arr;
}

// function 
function main() {
	var string = "Hello";
	var pstr = charAtArray(string);
	
}


//TEST
main();