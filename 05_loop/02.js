/*

* for 반복문
특정 횟수 만큼 반복하고 싶은 때 사용.

for (초기값, 조건식, 증감식)
초기값에는 const 대신 let 사용
for (let i = 0; i < 반복 횟수; i++) {
    문장
}
 */

/* for 반복 기본 */
// 0 부터 5미만 까지 반복
for (let  i = 0; i < 5; i++) {
    console.log(`${i}번째 반복입니다.`);
}

/* 1부터 N까지 더하기 */
let sum = 0; // 합계에 사용할 변수. 복합 대입 연산자에 사용해야 되서 반드시 초기화.
const n = 100;
for (let i = 1; i <= n; i++) {
    sum += i; // 1부터 100까지 더함.
}
// console.log(i); // i is not defined -> 변수 i가 효력을 가지는 범위는 for문 안쪽.
console.log(`1 ~ ${n}까지 숫자를 모두 더하면 ${sum}입니다.`);