/*
다음 배열은 각 학생의 이름을 나타냅니다.
이 배열을 map을 이용해서 각 학생의 이름을 대문자로 변환한 새로운 배열(namesUpper)을 반환하는 코드를 작성하세요.
문자열.toUpperCase()
 */
const names = ["John", "Jane", "Tom", "Anna"];

const namesUpper = names.map(function (name) {
    console.log(name);
    return name.toUpperCase();
})

console.log(namesUpper);