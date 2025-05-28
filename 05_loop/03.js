/*

* for 반복문과 뱅려
배열을 출력할 경우 배열.length 사용
 */
const todos = ['우유구매', '업무 메일 확인하기', '필라테스 수업'];

for (let i = 0; i < todos.length; i++) {
    console.log(`${i}번째 할 일: ${todos[i]}`);
}

/* for 반복문으로 배열을 반대로 출력하기 */
/*
2번째 할 일: 필라테스 수업
1번째 할 일: 업무 메일 확인하기
0번째 할 일: 우유 구매
 */
console.log();

for (let i = todos.length - 1; i >= 0; i--) {
    console.log(`${i}번째 할 일: ${todos[i]}`);
}