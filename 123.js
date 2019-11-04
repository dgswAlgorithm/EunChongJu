
function init(data) {
	printMapping(data, mapping(data));
}

function mapping(data) {
	var rank = makeMap(data.length);
	
	for (var i = 0; i < data.length; i++) {
		for (var j = 0; j < data.length; j++) {
			rank[i] += addCall(data[i], data[j]);
		}
	}
	return rank;
}

function makeMap(len) {
	var map = new Array(len);
	
	for (var i = 0; i < len; i++) map[i] = 1;
	
	return map;
}

function addCall(a,b) {
	return (a < b);
}

function printMapping(data, rank) {
	for (var i = 0; i < rank.length; i++) {
		console.log(data[i] + " : " + rank[i]);
	}
}


// Test
a = [56,25,67,88,100,61,55,67,76,56];

init(a);