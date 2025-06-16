/*

* 프로미스의 생성
Promise 생성자 함수를 new 연산자와 함께 호출하면 프로미스 (Promise 객체)를 생성.
Promise 생성자 함수는 비동기 처리를 수행할 콜백함수를 인수로 받는데
이 콜백 함수는 resolve와 reject 함수를 인수로 전달받음.
 */
// 프로미스 생성
const promise = new Promise((resolve, reject) => {
    // Promis() 생성자 함수의 콜백 함수 내부에서 비동기 처리를 수행.
    if (/* 비동기 처리 성고 */'') {
        resolve('result');
    } else {/* 비동기 처리 싫패 */
        reject('failure reason');
    }
})

/*
Promise 생성자 함수가 인수로 전달받은 콜백함수 내부에서 비동기 처리를 수행.
이때 비동기 처리가 성공하면 콜백 함수의 인수로 전달받은 resolve 함수를 호출하고,
비동기 처리가 실패하면 reject 함수를 호출.
 */