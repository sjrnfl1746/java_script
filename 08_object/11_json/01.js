/*

*  내장 객체 : JSON 객체
JSON : JavaScript Object Notation 약자
자바 스크립트의 객체처럼 자료를 표현하는 방식.
인터넷에서 '문자열'로 자료를 주고 받을 때 사용.

ex)
결제 후 정보 확인
https://docs.tosspayments.com/guides/v2/payment-window/integration
https://docs.tosspayments.com/guides/v2/easypay-response

ex) {"name":"박은지", "days":10 }

XML : eXtensible Markup Language
ex) <name>"박은지"</name><days>10</days>

JSON 형식의 추가 규칙
* 값을 표현할 때는 문자열, 숫자, 불, 배열, 객체 자료형만 사용할 수 있음.(함수 등은 사용 불가)
* 문자열은 반드시 큰 따옴표를 만들어야 함.
* 키 key에도 반드시 따옴표를 붙여야 함.
 */
const data = [ // 자료를 생성
    {
        name: '리팩터링 2판',
        price: 35000,
        publisher: '한빛미디어'
    },
    {
        name: '리팩토링 자바스크립트',
        price: 36000,
        publisher: '길벗'
    }
];

console.log(typeof data); // object
console.log(data[0].name); // 리팩터링 2판
console.log('');

// 1) 객체를 JSON (문자열) 으로 변환.
const str = JSON.stringify(data);
console.log(typeof str); // string
console.log(str);
// [{"name":"리팩터링 2판","price":35000,"publisher":"한빛미디어"},{"name":"리팩토링 자바스크립트","price":36000,"publisher":"길벗"}]
console.log(str.substring(10, 17)); // 리팩터링 2판
console.log('');

// 2) JSON (문자열)을 객체로 변환
const books = JSON.parse(str);
console.log(typeof books); // object
console.log(books[0].name); // 리팩터링 2판
console.log('');

// 3) 보기 좋게 출력 (들여쓰기 적용)
console.log(JSON.stringify(books, null, 2));
/*
두 번째 매개변수는 객체에서 어떤 속성만 추출하고 싶을 때 사용(함수 또는 배열 사용)하거나 거의 사용하지 않으며,
일반적으로 null(아무것도 없음)을 넣음.
3번째 매개변수는 들여쓰기.
 */