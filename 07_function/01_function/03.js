/*

* 호이스팅(hoisting)
-> JavaScript 엔진이 코드를 실행하기 전에 변수 선언과 함수 선언을 코드의 최상단으로 끌어올리는 동작.
즉, 코드 작성 순서와는 다르게 실행 시점에는 선언이 먼저 처리
var로 선언한 변수와 선언적 함수는 변수, 함수 선언 이전에 호출하여도 에러를 발생하지 않음.
 */

// 함수 호출
compute();

// 함수 정의
function compute() {
    let x = 10;
    let y = 100;
    let result = x / y;
    console.log(result);
}