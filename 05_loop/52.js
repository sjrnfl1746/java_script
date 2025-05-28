/*

* continue 키워드 활용


 */

// 1부터 10까지의 짝수의 합을 구함. continue 사용
let sum = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 1) {
        // 홀수면 현재 반복을 중지하고 다음 반복을 수행.
        continue;
    }
    sum += i;
}
console.log(sum);