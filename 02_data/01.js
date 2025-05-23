/*
자료 data : 프로그래밍에서 프로글매이 처리할 수 있는 모든 것
자료형 data type : 자료 형태에 따라 나눠 놓은 것

* 기본 자료형 : 문자열 string, 숫자 number, 불 boolean

1. 기본 자료형 : 문자열 string

문자와 문자열을 구분하는 언어도 있으나 자바 스크립트는 문자열로 통일.
문자열 자료형을 만드는 방법 : 작은 따옴표나 큰 따옴표로 감쌈.
 */
console.log("안녕하세요"); // 안녕하세요
console.log('안녕하세요');

// console.log("안녕하세요'); // 시작과 끝은 같아야 함

// 혼용하는 것도 가능
console.log('this is "string"'); // this is "string"
console.log("this is 'string'"); // this is 'string'

// 이스케이프 문자 사용 : 따옴표를 문자 그대로 사용하고 싶을 때
console.log('this is \'string\''); // this is 'string'
console.log("this is \"string\""); // this is "string"

/*
이스케이프 문자 사용 예
\n : 줄바꿈
\t : 탭문자
\\ : 역슬래시(\) 자체
 */
console.log("this is 'string' \nthis is 'string'"); // 줄 바꿈
console.log("this is 'string' \tthis is 'string'") // 탭 문자