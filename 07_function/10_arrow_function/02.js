/*
map(), filter() 함수처럼 단순한 형태의 콜백 함수를 쉽게 입력
function 키워드 대신 화살표(=>)를 사용
기본형 :
(매개변수) => { }
 */
// 배열을 선언
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers에서 2의 배수만 추출한 후, 제곱을 한 후에 로그에 출력.
// 배열의 메소드를 연속적으로 사용. 메소드 체이닝.
// 메소드 체이닝 : 1) 메소드가 리턴하는 값을 기반으로 해서 2) 메서드를 줄줄이 사용하는 것.
numbers.filter(function (num) {
    return num % 2 === 0;
}).map(function (num) {
    return num * num;
}).forEach(function (num) {
    console.log(num);
})

numbers.filter(num => num % 2 === 0)
.map(num => num * num)
.forEach(num => console.log(num))

const students = [
    {name: "John", score: 55},
    {name: "Jane", score: 78},
    {name: "Tom", score: 62},
    {name: "Anna", score: 90}
];

students.filter(function (student) {
    return student.score >= 60;
}).map(function (student) {
    return student.name;
}).forEach(function (student) {
    console.log(student);
})

students.filter(student => student.score >= 60)
    .map(student => student.name)
    .forEach(student => console.log(student))