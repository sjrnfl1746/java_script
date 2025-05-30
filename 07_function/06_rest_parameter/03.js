/*

나머지 매개변수와 일반 매개변수 조합하기
매개변수의 자료형에 따라 다르게 작동하는 함수 만들기

조건 : 최솟값 구하기
1) min(배열) : 매개 변수에 배열을 넣으면 배열 내부에서 최소값을 찾아주는 함수.
2) min(숫자, 숫자) : 매개 변수에 숫자를 넣으면 숫자들 중 최소값을 찾아주는 함수.
 */
'use strict'
const min = function (first, ...rests) {
    // console.log(first);
    // console.log("typeof: " + typeof first);
    /*
    1) min(배열)방식의 호출인 경우 first에는 배열이, ...rest에는 아무값도 넘어오지 않음.
    2) min(숫자, 숫자) 방식의 호출인 경우 first에는 첫번째 인수가, ...rests에는 두번째 인수부터 나머지가 배열로 들어옴.
     */
    // 변수 선언
    let min; // 최소값 저장
    let items; // 배열 저장

    // 매개변수의 자료형에 따라 조건 분기하기.
    if (Array.isArray(first)) { // first가 배열인 경우
        min = first[0];
        items = first;
        items.shift(); // 배열에서 첫 번째 요소를 제거
        // console.log(items);
    } else if (typeof first === "number") { // first가 숫자인 경우
        min = first;
        items = rests;
        // console.log(min);
    }

    // 1) for of
    // for (const item of items) {
    //     if (item < min) {
    //         min = item;
    //     }
    // }

    // 2) forEach, arrow function
    items.forEach(item => min > item ? min = item : '')
    return min;
}

console.log(`min(배열): ${min([52, 273, 32, 103, 275, 24, 57])}`); // 24;
console.log(`min(숫자, ...): ${min(52, 273, 32, 103, 275, 24, 57)}`); // 24;