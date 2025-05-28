/*

* 배열의 뒷 부분에 요소 추가하기
인덱스를 사용해 배열 뒷부분에 요소 추가하기.
배열의 길이는 고정이 아니기 때문에 인덱스 번호를 사용해서 강제로 요소를 추가할 수 있음.
 */
const fruitsA = ['사과', '배', '바나나'];
console.log(fruitsA); // ['사과', '배', '바나나']

fruitsA[10] = '귤'; // 배열의 길이는 3개, 마지막 요소의 인덱스는 2번인데 10번 인덱스를 강제로 입력.

// 4 ~ 10 번째 요소는 아무것도 없음.
console.log(fruitsA); // ['사과', '배', '바나나', <7 empty items>, '귤']

const fruitsB = ['사과', '배', '바나나'];

// length 속성 사용
fruitsB[fruitsB.length] = '귤';

console.log(fruitsB); // [ '사과', '배', '바나나', '귤' ]