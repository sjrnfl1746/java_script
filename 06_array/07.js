/*

* 배열 요소 제거하기 : 값으로 요소 제거하기
값을 기반으로 요소를 제거할 때는
배열 내부에서 특정 값의 위치를 찾는 indexOf() 메소드를 사용해서 값의 위치를 추출한 후
splice() 메소드를 사용해서 제거

const 인덱스 = 배열.indexOf(요소);
배열.splice(인덱스, 1);
 */
const fruits = ['사과', '배', '바나나'];

// 바나나를 값으로 가지는 인덱스 구함.
let index = fruits.indexOf('바나나');
console.log(index); // 2

fruits.splice(index, 1);
console.log(fruits); // [ '사과', '배' ]

// 중복된 값이 있는 경우
const fruitsB = ['사과', '배', '바나나', '사과'];
index = fruitsB.indexOf('사과');
console.log(index); // 0

fruitsB.splice(index, 1);
console.log(fruitsB); // [ '배', '바나나', '사과' ]

console.log(fruitsB.indexOf('귤')); // 배열에 없는 경우 -1을 출력
if (fruitsB.indexOf('귤') >= 0) {
    fruitsB.splice(fruitsB.indexOf('귤'), 1);
}

// 중복된 값이 있는 경우 삭제시에 반복문 사용
const fruitsC = ['사과', '배', '바나나', '사과'];
while (fruitsC.indexOf('사과') >= 0) {
    fruitsC.splice(fruitsC.indexOf('사과'), 1);
}
console.log(fruitsC); // [ '배', '바나나' ]