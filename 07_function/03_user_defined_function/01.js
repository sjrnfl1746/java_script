/*

* 기본적인 사용자 정의 함수 예제 : a부터 b까지 더하는 함수

1. 매개변수 2개, 리턴값은?
2. for문 사용.
 */

const sumAll = function (start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) { // 초기값 선언; 조건식; 증감식)
        sum += i; // 실행문
    }
    return sum;
}
console.log(`1부터 100까지의 합: ${sumAll(1, 100)}`); // 5050
console.log(`1부터 500까지의 합: ${sumAll(1, 500)}`); // 125250