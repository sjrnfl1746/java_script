/*
객체 리터널을 이용하여 다음 조건에 따라 객체를 생성하고 관리하는 프로그램을 작성하세요.
1.	학생 정보를 관리하는 객체 student를 생성하세요.
2.	속성:
name: 학생 이름 (초기값 없음)
scores: 점수를 저장하는 배열 (초기값 빈 배열)
3.	메서드:
addScore(score): score를 scores 배열에 추가합니다.
getAverage(): scores 배열의 평균 점수를 반환합니다. (forEach, arrow function 사용)
4.	학생 이름을 "이순신"으로 설정하고, 점수 90, 85, 88을 차례로 추가한 뒤, 평균 점수를 출력하세요.
 */
'use strict';

const student = {
    name:undefined,
    scores:[],
    addScore: function (...scores) {
        // console.log(this);
        this.scores = scores
        // console.log(this);
    },
    getAverage: function() {
        let sum = 0;
        this.scores.forEach(score => sum += score)
        console.log(sum);
        return parseInt((sum / this.scores.length).toFixed(2));
    }
}
student.name = '이순신';
student.addScore(90, 85, 88);
console.log(student.getAverage());