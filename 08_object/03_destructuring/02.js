/*
객체 기반의 다중 할당
객체 내부에 있는 속성을 꺼내서 변수로 할당할 수 있음.

{ 속성 이름, 속성 이름 } = 객체
{ 식별자 = 속성 이름, 식별자 = 속성 이름 } = 객체
 */
const object = {
    name: 'Alex',
    age: 28,
    job: 'data analyst'
}

// 객체의 변수를 추출.
// const { name, age } = object; // name, age 속성을 그대로 출력
// console.log(`# 속성 이름 그대로 꺼내서 출력하기`);
// console.log(name, age); // Alex 28
// console.log(' ');

const { name: a, age: b } = object; // name 속성을 a라는 이름으로, age 속성을 b라는 이름으로 꺼냄.
console.log(`# 다른 이름으로 속성 꺼내서 출력하기`);
console.log(a, b); // Alex 28