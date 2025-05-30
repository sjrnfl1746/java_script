/*

* 블록 스코프와 함수 스코프

모든 변수는 스코프 (scope, 범위)가 있음.
let은 블록 스코프, 함수 스코프를 가짐. 하지만 var은 함수 스코프만 가짐
 */

var animal = 'dog';
console.log(animal);

// 1) 블록을 사용한 스코프 생성
{
    var animal = 'cat';
    console.log(animal); // cat
}
console.log(animal); // cat 블럭에서 사용했지만 블럭 밖으로 변수 사용이 됨.

// 2) 함수 블록을 사용한 스코프 생성
var animal = 'dog';
console.log(animal);

function f() {
    var animal = 'cat';
    console.log(animal); // cat
}
f();

console.log(animal); // dog