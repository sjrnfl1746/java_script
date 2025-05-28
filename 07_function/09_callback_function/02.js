/*

* 콜백 함수로 익명함수 사용하기
 */

const callThreeTimes = function (callback) {
    for (let i = 0; i < 3; i++) {
        callback(i); // 매개변수명 뒤에 소괄호를 사용하는 것으로 보아 매개변수로 받은 것은 함수.
    }
}

// 함수를 호출
// 다른 언어에서는 낯선 방법이나 자바 스크립트나 코틀린(안드로이드) 같은
// 이벤트 기반의 프로그래밍에서는 자주 사용.
callThreeTimes(function (i) {
    console.log(`${i}번째 함수 호출`);
});