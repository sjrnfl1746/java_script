/*
오전과 오후 구분하기
 */
// 변수를 선언
const date = new Date(); // 현재 날짜와 시간을 갖는 객체 생성.
const hour = date.getHours(); // 현재시간을 0 ~ 23 사이의 값으로 출력하는 메소드.
console.log(hour);

if (hour > 12) {
    console.log('오후입니다.')
} else {
    console.log('오전입니다.')
}

// 3항 연산자로 변경
console.log(hour > 12 ? `오후입니다.` : `오전입니다.`);