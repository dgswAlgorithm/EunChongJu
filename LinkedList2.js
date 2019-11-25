//LinkedList Class
function LinkedList(){
	var Node = function(element){	// {1}
		this.element = element;
		this.next = null;
	};
	
	var length = 0;	// {2}
	var head = null;	// {3}
	
	this.append = function(element){
		var node = new Node(element),	// {1}
			current;	// {2}
		
		if (head === null){	// if isEmpty List	// {3}
			head = node;
		}
		else {
			current = head;	// {4}
			
			//마지막 원소를 발견할 때 까지 계속 루프 순환한다.
			while (current.next){
				current = current.next;
			}
			
			//마지막 원소를 링크할 수 있게 다음 노드에 할당한다.
			current.next = node;	// {5}
		}
		
		length++;	// {6}
	};
	
	this.insert = function(position, element){
		if (position >= 0 && position <= length){	// {1}
			var node = new Node(element),
				current = head,
				previous,
				index = 0;
			
			if (position === 0){	//First Add
				node.next = current;	// {2}
				head = node;
			}
			else {
				while (index++ < position) {	// {3}
					previous = current;
					current = current.next;
				}
				node.next = current;	// {4}
				previous.next = node;	// {5}
			}
			
			length++;	//List Length Update
			
			return true;
		}
		else {
			return false;	// {6}
		}
	};
	
	this.removeAt = function(position){
		
		//범위 외의 값인지 체크한다.
		if (position > -1 && position < length) {	// {1}
			var current = head,	// {2}
				previous,	// {3}
				index = 0;	// {4}
			
			//첫 번째 원소 삭제
			if (position === 0){	// {5}
				head = current.next;
			}
			else {
				while (index++ < position){	// {6}
					previous = current;	// {7}
					current = current.next;	// {8}
				}
				
				//현재의 다음과 이전 것을 연결한다: 삭제하기 위해 건너뛴다.
				previous.next = current.next;	// {9}
			}
			
			length--;	// {10}
			
			return current.element;
		}
		else {
			return null;	// {11}
		}
	};
	
	this.remove = function(element){
		var index = this.indexOf(element);
		
		return this.removeAt(index);
	};
	
	this.indexOf = function(element){
		var current = head,
			index = -1;
		
		while (current) {	// {2}
			if (element === current.element){
				return index;		// {3}
			}
			index++;				// {4}
			current = current.next;	// {5}
		}
		
		return -1;
	};
	
	this.isEmpty = function(){
		return length === 0;
	};
	
	this.size = function(){
		return length;
	};
	
	this.toString = function(){
		var current = head,	// {1}
			string = '';	// {2}
		
		while (current) {	// {3}
			string += current.element;	// {4}
			current = current.next;	// {5}
		}
		
		return string;	// {6}
	};
	
	this.print = function(){
		
	};
	
	this.getHead = function(){
		return head;
	};
}

//Coding Test
var list = new LinkedList();
list.append(15);
list.append(10);

///////////////////////////////////

//DoublyLinkedList Class
function DoublyLinkedList() {
	var node = function(element){
		this.element = element;
		this.next = null;
		this.prev = null;	// NEW
	};
	
	var length = 0;
	var head = null;
	var tail = null;	// NEW
	
	this.append = function(element){
		var node = new Node(element),	// {1}
			current;	// {2}
		
		if (head === null){	// if isEmpty List	// {3}
			head = node;
		}
		else {
			current = head;	// {4}
			
			//마지막 원소를 발견할 때 까지 계속 루프 순환한다.
			while (current.next){
				current = current.next;
			}
			
			//마지막 원소를 링크할 수 있게 다음 노드에 할당한다.
			current.next = node;	// {5}
		}
		
		length++;	// {6}
	};
	
	this.insert = function(position, element){
		if (position >= 0 && position <= length){	// {1}
			var node = new Node(element),
				current = head,
				previous,
				index = 0;
			
			if (position === 0){	//First Add
				if (!head){
					head = node;
					tail = node;
				}
				else {
					node.next = current;
					current.prev = node;
					head = node;
				}
			}
			else if (position === length) {
				current = tail;
				current.next = node;
				node.prev = current;
				tail = node;
			}
			else {
				while (index++ < position) {	// {3}
					previous = current;
					current = current.next;
				}
				node.next = current;	// {4}
				previous.next = node;	// {5}
				current.prev = node;
				node.prev = previous;
			}
			
			length++;	//List Length Update
			
			return true;
		}
		else {
			return false;	// {6}
		}
	};
	
	this.removeAt = function(position){
		//범위 외의 값인지 체크한다.
		if (position > -1 && position < length) {	// {1}
			var current = head,	// {2}
				previous,	// {3}
				index = 0;	// {4}
			
			//첫 번째 원소 삭제
			if (position === 0){	// {5}
				head = current.next;
				
				//원소가 하나뿐이라면 tail을 업데이트한다.
				if (length === 1){
					tail = null;
				}
				else {
					head.prev = null;
				}
			}
			else if (position === length - 1) {
				current = tail;
				tail = current.prev;
				tail.next = null;
			}
			else {
				while (index++ < position){	// {6}
					previous = current;	// {7}
					current = current.next;	// {8}
				}
				
				previous.next = current.next;	// {9}
				current.next.prev = previous;
			}
			
			length--;	// {10}
			
			return current.element;
		}
		else {
			return null;	// {11}
		}
	};
	
	this.remove = function(element){
		var index = this.indexOf(element);
		
		return this.removeAt(index);
	};
	
	this.indexOf = function(element){
		var current = head,
			index = -1;
		
		while (current) {	// {2}
			if (element === current.element){
				return index;		// {3}
			}
			index++;				// {4}
			current = current.next;	// {5}
		}
		
		return -1;
	};
	
	this.isEmpty = function(){
		return length === 0;
	};
	
	this.size = function(){
		return length;
	};
	
	this.toString = function(){
		var current = head,	// {1}
			string = '';	// {2}
		
		while (current) {	// {3}
			string += current.element;	// {4}
			current = current.next;	// {5}
		}
		
		return string;	// {6}
	};
	
	this.print = function(){
		
	};
	
	this.getHead = function(){
		return head;
	};
}

//환형 연결리스트 //만들기 귀찮다...
//Cycle LinkedList Class

