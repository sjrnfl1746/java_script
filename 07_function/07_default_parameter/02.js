/* 기본 매개 변수 응용 */

// 년도를 인수로 전달하지 않은 경우에는 현재 년을 기본값으로 함.

const isLeapYear = function (year = new Date().getFullYear()) {
    console.log(year);
    return (year %  4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(`2020년은 윤년일까? === ${isLeapYear(2020)}`); // true. 4의 배수

console.log(`2010년은 윤년일까? === ${isLeapYear(2010)}`); // false. 4의 배수가 아님

console.log(`2000년은 윤년일까? === ${isLeapYear(2000)}`); // true. 4의 배수, 400의 배수

console.log(`1900년은 윤년일까? === ${isLeapYear(1900)}`); // false. 4의 배수이지만 100의 배수