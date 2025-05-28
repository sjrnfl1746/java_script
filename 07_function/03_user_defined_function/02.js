/*
배열을 전달 받아서 최솟값을 구하는 함수.
 */
const getMin = function (arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        min > arr[i] ? min = arr[i] : min;
    }
    return min;
}
const testArray = [52, 273, 32, 103, 275, 24, 57];
console.log(`${testArray}중에서`);
console.log(`최솟값 = ${getMin(testArray)}`); // 24;