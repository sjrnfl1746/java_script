/*

* 콜백 함수 callback function
매개 변수로 전달하는 함수. 자바 스크립트는 함수도 하나의 자료형이므로 매개변수로 전달 할 수 있음.
 */

const callThreeTimes = function (callback) {
    for (let i = 0; i < 3; i++) {
        callback(i); // 매개변수명 뒤에 소괄호를 사용하는 것으로 보아 매개변수로 받은 것은 함수.
    }
}

const print = function (i) {
    console.log(`${i}번째 함수 호출`);
}

// 함수를 호출
callThreeTimes(print); // 매개변수로 함수를 전달. 함수를 매개변수로 사용할 경우 ()는 제외.