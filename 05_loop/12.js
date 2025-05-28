/*

* for of 반복문
반복문 내부의 반복변수에 인덱스 대신 요소의 값이 들어감.
자바의 foreach, 파이썬의 for in 요소와 유사.

for(const 반복변수 of 배열 또는 객체) {
    문장
}
 */
const todos = ['우유구매', '업무 메일 확인하기', '필라테스 수업'];

for (const todo of todos) { // todo에 요소의 값이 들어감
    console.log(`오늘의 할 일: ${todo}`);
}