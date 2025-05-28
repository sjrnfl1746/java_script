/*
다음 배열은 각 학생의 이름과 점수를 나타냅니다.
1. 이 배열을 for of 문을 사용하여 점수가 60점 이상인 학생의 이름을 콘솔에 출력하는 코드를 작성하세요.
2. 이 배열을 for each 문을 사용하여 점수가 60점 이상인 학생의 이름을 콘솔에 출력하는 코드를 작성하세요.
 */



const students = [
    {name: "John", score: 55},
    {name: "Jane", score: 78},
    {name: "Tom", score: 62},
    {name: "Anna", score: 90}
];

// 1. for of
for (const student of students) {
    if (student.score < 60) {
        continue;
    }
    console.log(student.name);
}

console.log()

// 2. for each
students.forEach(function (student) {
    if (student.score >= 60) {
        console.log(student.name);
    }
})