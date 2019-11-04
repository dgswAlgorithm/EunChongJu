
//mapping = Array(11);

function mapping(data) {
	let mapping = makeArr(11);
	
	for (var i = 0; i < data.length; i++) {
		mapping[filter(data[i])]++;
	}
	
	return mapping;
}

function makeArr(num) {
	var map = new Array(num);
	for (var i = 0; i < map.length; i++) {
		map[i] = 0;
	}
	return map;
}

function filter(data) {
	index = parseInt(data / 10)
	if ((parseInt(data / 10) == index) && ((data % 10) >= 0))
		return index;
	else
		return index--;
}

function init(data) {
	showHistogram(mapping(data));
}

function showHistogram(map) {
	for (var i = 0; i < map.length; i++) {
		console.log(i * 10 + " : " + map[i]);
	}
}

// Test
a = [35,25,56, 78, 43, 66, 71, 73, 80, 90, 0, 73, 35, 65, 100, 78, 80, 85, 35, 50];

init(a);
