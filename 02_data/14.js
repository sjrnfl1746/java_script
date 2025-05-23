/*

* const를 이용한 변수 선언
const는 재선언, 덮어쓰기가 모두 불가능한 가장 엄격한 변수 선언 방법.
constant (상수)라는 의미에서 이런 이름을 사용.

다음은 const로 정의한 변수를 덮어 쓰려고 할 때의 예
 */

const val1 = 'const 변수';
console.log(val1);

// const 변수를 덮어 쓰기 불가능
val1 = 'const 변수 덮어 쓰기';
// Uncaught TypeError: Assignment to constant variable.

/*
const를 이용한 변수 선언은 덮어 쓰기를 사전에 감지해서 알려주기 때문에 '실수로 덮어쓰는' 사태를 피할 수 있음.
물론 let과 마찬가지로 재선언을 해도 에러가 발생.

그러나 변수 종류에 따라 const로 정의해도 값을 변경할 수 있는 경우가 있으므로 주의.
 */