/*

* 콜백함수를 활용하는 함수 : filter()
콜백함수에서 리턴하는 값이 true 인 것들만 모아서 새로운 배열을 만듦.
-> 콜백함수의 리턴 타입이 불 형 이어야 함.

filter<number>(
    predicate: (value: number, index: number, array: number[]) => boolean,
    thisArg?: any,
): number[]
 */
const numbers = [11, 12, 13, 14, 15, 16];

// 짝수만 추출
const evenNumbers = numbers.filter(function (num) {
    return num % 2 === 0;
})

// 인덱스가 짝수만 추출
const evenIndexes =numbers.filter(function (num, index) {
    return index % 2 === 0;
})

// 1의 자리가 3의 배수인 경우만 추출 -> 13, 16
const tmpArray = numbers.filter(function (num) {
    return num % 10 % 3 === 0;
})

console.log(`원래 배열 : ${numbers}`); // 11,12,13,14,15,16
console.log(`값이 짝수만 추출 : ${evenNumbers}`); // 12,14,16
console.log(`인덱스가 짝수만 추출 : ${evenIndexes}`); // 11,13,15
console.log(tmpArray); // [ 13, 16 ]
