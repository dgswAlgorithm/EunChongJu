// 이 함수는 0과 1로 이루어진 배열에 단 하나만 1을 삽입하여 더 긴 1을 만들라는 것.

// random Function : within min and max
function random(min,max) {
	return Math.random() * (max - min) + min;
}

function findIndexofZero(A) {
	var max_count = 0;
	var max_index = -1;
	
	var prev_zero_index = -1;
	var count = 0;
	
	for (var i = 0; i < A.length; i++) {
		if (A[i] == 1) {
			count++;
		}
		else {
			count = i - prev_zero_index;
			
			prev_zero_index = i;
		}
		
		if (count > max_count) {
			max_count = count;
			max_index = prev_zero_index;
		}
	}
}

function main() {
	var n = 3
	var arr = new Array(100);
	var max = new Array(3);
	var top = 0, one_idx = -1, save_idx;
	
	for (var i = 0; i < n; i++) {
		arr[i] = random(0, 1);
		if (one_idx == -1 && arr[i] == 1)
			one_idx = i;
	}
	
	for (var j = one_idx; j <= n; j++) {
		if (arr[i] == 0) {
			if (top == 2) {
				if (max[0] + max[1] < max[1] + max[2])
					save_idx = i - max[2] - 1;
				max[0] = max[1];
				max[1] = max[2];
			}
			else {
				save_idx = i - max[top] - 1;
				top++;
			}
		}
		else {
			max[top]++;
		}
	}
	console.log(save_idx);
}

main();
