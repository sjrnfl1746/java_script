/*

매개변수로 받은 숫자를 합해서 반환하는 함수로 수정.
1) for of 문 사용.
2) forEach , 화살표 함수
 */
'use strict'
const myFunc = function (...nums) {
    // console.log(nums);
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    return sum;
}

// const myFunc = function (...nums) {
//     let sum = 0;
//     nums.forEach(num => sum += num)
//     return sum;
// }

console.log(myFunc(1, 2));
console.log(myFunc(1, 2, 3));
console.log(myFunc(1, 2, 3, 4));