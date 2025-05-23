/*
* 자료형 검사 : 자료형을 확인할 때 typeof 연산자 사용
 */

let num = 10;
console.log(num);
num = 'h1';

// typeof 연산자 사용 : typeof(자료)
console.log(typeof ('안녕하세요')); // string
console.log(typeof (100)); // number
console.log(typeof (true)); // boolean

// 괄호가 없어도 됨 : typeof가 연산자라서 가능
console.log(typeof '안녕하세요'); // string
console.log(typeof 100); // number
console.log(typeof true); // boolean

console.log(typeof '안녕하세요' === 'string'); // true. "안녕하세요"의 자료형이 string
console.log(typeof ('안녕하세요') === 'string'); // true. "안녕하세요"의 자료형이 string
console.log(typeof ('안녕하세요' === 'string')); // boolean. "안녕하세요" === 'string'의 결과값은 false 즉 boolean.

function hello() {
    console.log('hello');
}
hello();

// 자바 스크립트에서는 변수에 함수를 할당하는 것이 가능.
// 즉, 함수도 하나의 자료형임.
let fun = function () {
    console.log('hello');
}
fun();

console.log(typeof fun); // function