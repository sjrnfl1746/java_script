/*

* 배열 뒷 부분에 요소 추가하기

배열 뒷 부분에 요소를 추가할 때는 push() 메소드 사용.
배열.push(요소)
 */
const todos = ['우유구매', '업무 메일 확인하기', '필라테스 수업'];
console.log(todos); // (3) ['우유구매', '업무 메일 확인하기', '필라테스 수업']

todos.push('저녁 식사 준비하기');
todos.push('피아노 연습하기');

console.log(todos); // (5) ['우유구매', '업무 메일 확인하기', '필라테스 수업', '저녁 식사 준비하기', '피아노 연습하기']

// 배열은 참조변수라서 const 라도 값 변겅이 가능.
const fruitsA = ['사과', '배', '바나나'];
fruitsA.push('망고');
console.log(fruitsA);

// 재할당은 불가능.
// fruitsA = ['우유구매', '업무 메일 확인하기', '필라테스 수업'];
// Uncaught TypeError: Assignment to constant variable

// const : 상수 선언때 사용하는 키워드
// 상수 : 변수는 저장된 값을 변경할 수 있지만, 상수는 저장된 값을 변경할 수 없음.

// 코드의 안전성과 예측 가능한 사용을 위해 const 사용.