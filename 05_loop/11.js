/*

* 반복문

for 인덱스 in 배열 : 인덱스 기반으로 출력
배열 요소를 하나하나 꺼내서 특정 문장을 실행할 때 사용.

for(const 반복변수(인덱스) in 배열 또는 객체) {
    문장
}
 */
const todos = ['우유구매', '업무 메일 확인하기', '필라테스 수업'];
const times = ['8시', '3시', '12시'];

// 배열 출력을 위한 전통적인 방버
for (let i = 0; i < todos.length; i++) {
    console.log(`${i}번째 할 일: ${todos[i]}`);
    console.log(typeof i); // number
}
console.log();

// for in 사용
for (const i in todos) { // i는 인덱스 번호를 가져옴
    console.log(`${i}번째 할 일: ${todos[i]}`);
    console.log(typeof i); // string -> 인덱스 값이 문자열.
}

// 시간과 같이 출력
for (const i in todos) {
    console.log(`${i}번째 할 일: ${times[i]} : ${todos[i]}`);
}