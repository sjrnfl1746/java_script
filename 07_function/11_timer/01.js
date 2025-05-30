/*

* 타이머 함수 : 특정 시간 이후에 콜백함수(특정코드)를 호출할 수 있는 함수.

setTimeout(함수, 시간) : 특정 시간 후에 함수(코드)를 한 번 호출(실행).

function setTimeout(
    handler: TimerHandler,
    timeout?: number,
    ...arguments: any[],
): number

setInterval(함수, 시간) : 특정 시간마다 함수(코드)를 호출(반복 실행).

function setInterval(
    handler: TimerHandler,
    timeout?: number,
    ...arguments: any[],
): number

 */
setTimeout(() => console.log(`2초 후에 실행됩니다.`), 2 * 1000)

let count = 1;
setInterval(function () {
    console.log(`2초 마다 실행됩니다.(${count}번째)`);
    count++;
}, 2 * 1000)