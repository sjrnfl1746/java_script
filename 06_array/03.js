/*
* 배열 요소 개수 확인하기
*
배열 내부에 들어 있는 요소의 개수를 확인할 때는 배열의 length 속성을 사용.
배열.length
 */

const fruits = ['배', '사과', '키위', '바나나'];

console.log(fruits.length); // 4

// 배열의 마지막 요소를 선택할 때 사용하는 패턴
console.log(fruits[fruits.length - 1]); // 바나나