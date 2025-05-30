/*

* 콜백 함수를 활용하는 함수 : map() 메서드
콜백함수에서 리턴한 값들을 기반으로 새로운 배열을 만들고 '배열 리턴'

map<unknown>(
    callbackfn: (value: number, index: number, array: number[]) => unknown,
    thisArg?: any,
): unknown[]
 */

// 배열을 선언
const numbers = [273, 52, 103, 32, 57]

const numbers2 = numbers.map(function (value, index, array) {
    return value * value;
})

console.log(numbers2); // [ 74529, 2704, 10609, 1024, 3249 ]

numbers2.forEach(console.log); // value, index, array
/*
74529 0 [ 74529, 2704, 10609, 1024, 3249 ]
2704 1 [ 74529, 2704, 10609, 1024, 3249 ]
10609 2 [ 74529, 2704, 10609, 1024, 3249 ]
1024 3 [ 74529, 2704, 10609, 1024, 3249 ]
3249 4 [ 74529, 2704, 10609, 1024, 3249 ]
 */