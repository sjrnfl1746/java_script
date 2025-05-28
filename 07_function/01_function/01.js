/*

* 함수 : 코드의 집합. 함수를 실행하면 여러 코드를 묶어서 실행할 수 있고,
필요할 때마다 호출하여 반복적으로 사용 가능.

* 함수를 사용하면 좋은 점
1. 반복되는 코드를 한 번만 정리해 놓고 필요할 때마다 호출하므로 반복작업을 피할 수 있다.
2, 긴 프로그램을 기능별로 나눠 여러 함수로 나누어 작성하면 모듈화로 전체 코드의 가독성이 좋아진다.
3. 기능별(함수별)로 수정이 가능하므로 유지보수가 쉽다.

* 용어정리
함수 정의 : 함수를 만든 것.
함수 호출 : 함수를 사용하는 것.
인수 : '함수를 호출할 때' 괄호 내부에 여러가지 자료를 넣는 것,
매개변수 : '함수를 정의할 때' 전달받을 인수를 정의하는 것.
리턴 값 : 함수를 호출해서 최종적으로 나오는 결과.
 */

// 함수 정의
function notice(msg) {
    console.log(msg);
}

// 이름 : notice

// 함수 호출
notice('hello world');

const notice2 = function (msg) {
    console.log(msg)
}
notice('hello world');

/*
익명 함수 선언하기
익명 함수 annonymous function : 이름이 없는 함수
기본형 : function () {}

function : let으로 변수 선언을 알리는 것 처럼 함수 선언을 알리는 키워드
    () : 함수 호출 시에 전달받을 데이터를 선언하는 곳.
    {} : 호출 시 실행할 코드를 적는 곳.
 */

// 변수를 선언해서 함수를 할당.
const func = function () {
    console.log(`함수 내부의 코드입니다. ...1`);
    console.log(`함수 내부의 코드입니다. ...2`);
    console.log(`함수 내부의 코드입니다. ...3`);
    console.log(``);
}

// 함수를 호출
func();
func();

console.log(typeof func);
console.log(func);