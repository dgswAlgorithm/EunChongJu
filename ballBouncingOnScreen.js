

//Function Class : (x, y, radius, axisX, axisY, frameWidth, frameHeight)
var BallScreen = function(x, y, r, axisX, axisY, fsX, fsY) {
	this.x = x;	// 공의 위치: X, 이 값은 공의 중심지가 기준이 된다.
	this.y = y;	// 공의 위치: Y, 이 값은 공의 중심지가 기준.
	this.radius = r;	// 공의 반지름 값
	this.axisX = axisX;	// 나아가는 방향의 축: X
	this.axisY = axisY;	// 나아가는 방향: Y
	this.frameWidth = fsX;	// 공을 가두는 프레임의 크기
	this.frameHeight = fsY;	// 프레임의 크기
	
	this.prevX = x;
	this.prevY = y;
	
	// 조회할 때마다 현재위치가 바뀌며 그 값을 반환
	this.go = function() {
		
	}
	
	//값을 바꾸기 전에 기존의 위치와 바뀐 위치에 대해 비교하며 반사값을 계산하여....
	this.setPrevX = function() {
		this.prevX = this.x;
	}
	this.setPrevY = function() {
		this.prevY = this.y;
	}
	
	// 만약 충돌시 충돌 타입을 파악하고 반환 (충돌하지 않았다면 0, 충돌해 통과시 -1, 벽에 닿아 있을 시 +1을 반환한다.)
	// X축과 평행한 벽에 충돌했는지 판단하는 함수
	this.collisionX = function() {
		if ((this.y == this.radius) || (this.y == (this.frameHeight - this.radius))) {
			return 1;
		}
		else if ((this.y < this.radius) || (this.y > (this.frameHeight - this.radius))) {
			return -1;
		}
		else {
			return 0;
		}
	};
	// Y축과 평행한 벽에 충돌했는지 판단하는 함수
	this.collisionY = function() {
		if ((this.x == this.radius) || (this.x == (this.frameWidth - this.radius))) {
			return 1;
		}
		else if ((this.x < this.radius) || (this.x > (this.frameWidth - this.radius))) {
			return -1;
		}
		else {
			return 0;
		}
	};
	
	// 벽에 닿는 시점(예를 들어 공의 반지름이 1인데 (1,6)위치에 Y축과 충돌하고 튕길 시점일때)에 충돌 발생시 방향이 전환
	// X축과 평행한 벽에 부딪혀 반사되는 함수
	this.reflectionX = function() {
		this.axisY *= -1;
	};
	// Y축과 평행한 벽에 부딪혀 반사되는 함수
	this.reflectionY = function() {
		this.axisX *= -1;
	};
	
	// 시점에서 이미 벽에 닿아 통과할 때 처리하는 함수
	// X축과 평행한 벽을 지나게 될 때 함수
	this.penetrationX = function() {
		this.reflectionX();
//		this.axisY *= -1;
	};
	// Y축과 평행한 벽을 지나게 될 때 함수
	this.penetrationY = function() {
		this.reflectionY();
//		this.axisX *= -1;
	};
	
}


// TEST ZONE
var ball = new BallScreen(1,1,1,1,1,10,10);

setInterval((ball.go), 1000);
