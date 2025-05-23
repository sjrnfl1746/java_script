/*

* 삼항 연산자 : 조건식의 결과 (true, false)에 따라 결과 값을 다르게 나오게 해주는 연산자.

형식 : 조건식 ? 실행문1 : 실행문2;

조건식이 true일 때는 실행문 1, false 일때는 실행문 2가 실행됨.
 */
let num1 = 10;
let num2 = -10;
console.log(num1 > 0 ? '양수' : '음수');
console.log(num2 > 0 ? '양수' : '음수');

let num3 = 31;
let type = num3 % 2 === 0 ? '짝수' : '홀수';
console.log(`${num3}는 ${type}입니다.`);

// 템플릿 문자열을 사용해서 직접 코드를 넣는 방법도 추천.
let num4 = 32;
console.log(`${num4}는 ${num4 % 2 === 0 ? '짝수' : '홀수'}입니다.`);

// 숫자 0은 false, 나머지 숫자는 true.
console.log(`${num4}는 ${num4 % 2 ? '홀수' : '짝수'}입니다.`);