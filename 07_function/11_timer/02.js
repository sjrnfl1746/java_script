/*

* 타이머 함수 : 타이머를 종료하고 싶을 때

clearTimeout(타이머_ID) : setTimeout() 함수로 설정한 타이머를 제거
clearInterval(타이머_ID) : setInterval() 함수로 설정한 타이머를 제거
 */

let count = 0;
const id = setInterval(() => {
    console.log(`1초마다 실행됩니다.(${count}번째)`);
    count++; // 1씩 증가
}, 1000)
// console.log(id)

setTimeout(() => {
    console.log(`타이머를 종료합니다.`);
    clearInterval(id);
}, 10 * 1000)