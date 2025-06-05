/*
구조 분해 할당 Destructing assignment
ES6에서 도입된 구조 분해 할당이란 이터러블(배열, 객체)의 요소들을 분해하여 각 변수에 할당하는 것

1. 배열 기반의 구조 분해 할당
할당 연산자(=) 왼쪽에 식별자(변수 또는 상수)의 배열을 넣고,
오른쪽에 배열을 위치 시키면 배열의 위치에 맞게 값들이 할당.
(파이썬의 튜플 tuple과 유사)

[식별자, 식별자, 식별자] = 배열;
 */
let [a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

// 다중 할당을 이용하면 swap  가능
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1

// 오른쪽과 왼쪽의 길이가 달라도 됨
const arrayA = [1, 2, 3, 4, 5];
const [c, d, e] = arrayA;
console.log(c, d, e); // 1 2 3

const arrayB = [1, 2];
const [f, g, h] = arrayB;
console.log(f, g, h); // 1, 2, undefined