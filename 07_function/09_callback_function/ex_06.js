/*
students라는 배열이 있습니다. 이 배열에는 이름과 나이가 포함되어 있는 객체들이 있습니다.
이 배열에서 나이가 20이상이니 학생만 필터링하고,
그 결과를 map을 사용하여 새로운 배열에 이름만 담은 배열로 반환하는 함수를 만들고,
이 함수를 students 배열에 filter & map 을 사용하여 적용하세요.
 */

const students = [
    { name: 'John', age: 19},
    { name: 'Alice', age: 21},
    { name: 'Bob', age: 20},
];

// 나이가 20 이상인 학생만 필터링
const isAdult = function (value) {
    return value.age >= 20;
}
// 이름만 담은 배열로 변환
const getName = function (value) {
    return value.name;
}

const adultStudents = students.filter(isAdult).map(getName);
console.log(adultStudents); // ['Alice', 'Bob']