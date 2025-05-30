/*

* 나머지 매개변수 : rest parameter
가변 매개변수 함수 : 호출할 때 매개변수의 갯수가 고정적이지 않는 함수.
자바스크립트에서는 이러한 함수를 구현할 때 '나머지 매개 변수'를 사용.
함수의 매개변수 앞에 마침표 3개(...)를 입력하면 매개변수가 배열로 들어 옴.
 */
const myFunc = function (...nums) {
    console.log(nums);
}
myFunc(1, 2);
myFunc(1, 2, 3);
myFunc(1, 2, 3, 4);