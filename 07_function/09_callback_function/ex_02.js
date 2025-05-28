/*
다음 배열의 모든 숫자를 더한 합계를 forEach()를 이용해 구하고 출력하세요.
 */

let scores = [80, 90, 70, 100];

// 총합 출력

let sum = 0;
scores.forEach((score) => {
    sum += score;
})
console.log(sum)

scores.forEach(function (score) {
    sum += score;
})
console.log(sum);