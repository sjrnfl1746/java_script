/*

* 선언적 함수를 변수에 할당하는 방법 2가지
 */

// 1. 변수에 할당하면서 선언적 함수 선언.
const func1st = function namedFunc1st() { // 변수를 선언해서 함수를 할당.
    console.log(`namedFunc1st() 함수 내부의 코드입니다 ...`);
    console.log(``);
}

// 호출
func1st(); // 변수를 통해 함수를 호출.
// namedFunc1st(); // Uncaught ReferenceError: namedFunc1st is not defined
// 변수에 할당하면서 선언적 함수를 선언하면 익명함수로 처리
console.log(typeof func1st); // function. 함수의 자료형 확인

// 2. 선언적 함수를 선언 후에 변수에 할당.
function namedFunc2nd() { // 변수를 선언해서 함수를 할당.
    console.log(`namedFunc2nd() 함수 내부의 코드입니다 ...`);
    console.log(``);
}
const func2nd = namedFunc2nd; // 선언적 함수를 변수에 할당.

func2nd(); // 변수를 통해 함수를 호출.
namedFunc2nd(); // 함수를 호출.
console.log(typeof func2nd); // function. 자료형 확인