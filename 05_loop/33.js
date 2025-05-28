/*

* while 문으로 배열 출력하기
while 반복문과 for 반복문은 서로 대체해서 사용할 수 있음.

보통 특정 횟수 반복할 때 for,
조건에 큰 비중이 있을때는 while. 예) 특정 시간동안 어떤 데이터를 받을 때 까지
 */

const array = [1, 2, 3, 4, 5];

// for 문으로 배열 출력. 아래의 코드에 초기값. 조건식, 증감식이 있음.

for (let i = 0; i < array.length; i++) {
    console.log(`${i} : ${array[i]}`);
}

console.log();

// while 문으로 배열 출력
// 1. 인덱스 번호가 필요 : 0 ~ 4
// 2. 반복문은 5번 반복

let i = 0;
while (i < array.length) {
    console.log(`${i} : ${array[i]}`);
    i++;
}