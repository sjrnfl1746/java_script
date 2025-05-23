/*
* 문자열 연산

문자열에 적용할 수 있는 처리
1. 문자열 연결 연산 : 문자열 + 문자열
2. 문자 선택 연산 : 문자열[인덱스] -> 문자 하나
3. 문자열의 길이 : 문자열.length -> 문자 갯수
 */

console.log('안녕하세요.' + '자바 스크립트 입니다.');
let greet = '안녕하세요.';
console.log(greet + '자바 스크립트 입니다.');

// 문자 선택 연산. 인덱스는 0부터 시작하는 정수로 이루어짐
console.log('안녕하세요'[0]); // 안
console.log('안녕하세요'[1]); // 녕
console.log(greet[0]);
console.log(greet[1]);

// 문자열의 길이
console.log('안녕하세요.'.length); // 6
console.log(greet.length);