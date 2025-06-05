/*
* this 키워드
- 현재 시점에 메모리에서 참조되고 있는 객체 자신을 가리키는 키워드
- 생성자 함수를 만드는 시점에는 생성자 함수를 통해 생성될 객체참조명을 알 수 없으므로 this 키워드를 사용
- this 는 자바스크립트 엔진에서 암묵적으로 만들어 짐
- 자바스크립트는 this 를 동적으로 바인딩(this에 객체참조를 전달)하는 것이 가능
즉, 어떤 메소드이던지 원하는 객체로 호출하는 것이 가능
- this 바인딩은 '함수 호출방식에 의해 동적으로 결정'됨
- 웹브라우저에서의 전역 this 는 window 객체, Node 에서의 전역 this는 global(globalThis)
- 화살표 함수 내에서의 this 는 화살표 함수 상위스코프의 this
 */
console.log(this); // 노드에서는 {}, 웹브라우저에서는 window 객체

// 함수 호출 방식에 따른 this 바인딩
const Car = function () {
    console.log(this);
}

// 1. 일반함수 호출 방식 > this는 전역객체
Car(); // <ref *1> Object [global] { ...

// 2. 메서드 호출 방식 > this는 메서드를 호출한 객체
const obj = {
    name: "객체",
    Car
}
obj.Car(); // { name: '객체', Car: [Function: Car] }

// 3. 생성자함수 호출 방식 > this는 생성자 함수를 통해 생성될 객체
new Car(); // Car {}