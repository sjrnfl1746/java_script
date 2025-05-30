/*
다음 배열은 각 학생의 이름과 점수를 나타냅니다. 이 배열에서 다음을 수행하는 코드를 작성하세요.

1.	filter 메서드를 사용하여 점수가 60점 이상인 학생들만 남깁니다.
2.	map 메서드를 사용하여 남은 학생들의 이름을 추출합니다.
3.	forEach 메서드를 사용하여 각 학생의 이름을 콘솔에 출력합니다.
 */
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
