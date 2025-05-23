/*
* 기본 자료형 : 불 boolean
참(true)과 거짓(false) 두 가지 값만 가지는 자료형

비교 연산자
=== : 양쪽이 같다
!== : 양쪽이 다르다.
> : 왼쪽이 더 크다.
< : 오른쪽이 더 크다.
>= : 왼쪽이 더 크거나 같다.
<= : 오른쪽이 더 크거나 같다.
 */

console.log(1 === 1);
console.log(1 == 1);
console.log(1 === '1');
console.log(1 == '1');

// 문자열도 비교 연산자 사용 가능. 내림차순 값이 크다.
console.log('강아지' > '냐옹이'); // false

// 논리 부정 연산자 (!)
// 값을 반대로 바꿈
console.log(!true); // false
console.log(!false); // true