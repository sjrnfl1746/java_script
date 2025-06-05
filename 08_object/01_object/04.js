/*
4. 프로토 타입
1) 생성자 안에서 메서드를 정의하는 방식의 문제점.
생성자 안에서 this 뒤에 메서드를 정의하면 그 생성자로 생성한 모든 인스턴스에 똑같은 메서드가 추가.
따라서 메서들 포함한 생성자로 인스턴스를 여러 개 생성하면 같은 작업을 하는 메서드가 인스턴스 개수만큼 생성하게 되며
결과적으로 그만큼 메모리를 소비하게 됨.

이러한 문제는 프로토타입 객체에 메서드를 정의하는 방식으로 해결할 수 있음.

2) 프로토타입 객체
자바 스크립트에서는 함수도 객체이므로 함수 객체가 기본적으로 prototype 프로퍼티를 가지고 있음.
 */
function F() {}
console.log(F.prototype); // {}

/*
함수의 prototype 프로퍼티가 가르키는 객체를 그 함수의 프로토타입 객체라고 함.
prototype 프로퍼티는 기본적으로 빈 객체를 가르킴.

프로토타입 객체의 프로퍼티는 생성자로 생성한 모든 인스턴스에서 그 인스턴스의 프로퍼티처럼 사용할 수 있음.
 */
F.prototype.prop = 'prototype value';
const obj = new F();
console.log(obj.prop); // prototype value

/*
프로토타입은 원래 '원형(근원이 되는 구조)'이라는 뜻이지만,
자바스크립트에서는 '인스턴스에 아무것도 정의하지 않더라도 처음부터 사용할 수 있는 것'이라는 의미로 사용.

또한 프로토타입 객체의 프로퍼티는 읽기만 가능하고 (인스턴스를 통해) 수정이 불가능.
인스턴스의 프로퍼티에 값을 대입했을 때 이름이 같은 프로퍼티가 있으면 그 프로퍼티에 값을 대입.
그렇지 않을 대는 인스턴스에 그 이름으로 프로퍼티를 추가한 후에 값을 대입.
 */
console.log(obj.prop); // prototype value
obj.prop = 'instance value'; // prototype의 prop를 수정하는 것이 아니라 인스턴스에 prop 속성을 추가
console.log(obj.prop); // instance value
console.log(F.prototype.prop); // prototype value

/*
프로토타입 객체의 프로퍼티를 인스턴스에서 참조할 수 있는 상황을 가리켜
'인스턴스가 프로토타입 객체를 상속하고 있다.'라고 하며,
상속 구조는 '프로토 타입 체인'이라는 메커니즘을 바탕으로 구현되어 있음.

앞에서 언급한 생성자 안에서 this 뒤에 메서드를 정의할 때 생기는 문제는
생성자의 프로토타입 객체에 메서드를 추가하는 방식으로 해결할 수 있음.
 */
function Circle(center, radius) {
    this.center = center;
    this.radius = radius;
}

// Circle 생성자의 prototype 프로퍼티에 area 메서드를 추가.
Circle.prototype.area = function () {
    return Math.PI * this.radius * this.radius;
}

// Circle 생성자로 인스턴스를 생성
const c1 = new Circle({x: 0, y : 0}, 2.0);
const c2 = new Circle({x: 0, y : 1}, 3.0);
const c3 = new Circle({x: 1, y : 0}, 1.0);
console.log('넓이: ' + c1.area()); // 12.566370614359172

/*
인스턴스 c1, c2, c3 안에는 area()메서드가 존재하지 않지만 area 메서드를 사용할 수 있음.
메서드 안의 this 또한 생성자로 생성한 인스턴스를 가르킴.

이처럼 생성자의 프로토타입 객체에 메서드를 추가하면
인스턴스에 메서드를 추가하지 않아도 인스턴스가 프로토타입 객체의 메서드를 사용할 수
있으므로 메모리의 낭비를 피할 수 있음.
 */
c3.area = function () {
    return 1;
}
console.log(c3.area()); // 1
console.log(c2.area()); // 28.274333882308138