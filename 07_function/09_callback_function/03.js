/*

* 콜백함수를 활용하는 함수 : forEach() 메서드
배열이 갖고 있는 함수(메서드)로써 단순하게 배열 내부 요소를 사용해서 콜백함수를 호출.

배열이 가지고 있는 메소드 중 콜백 함수를 활용하는 메서드는 아래와 같은 형태의 콜백함수를 사용.

매개변수가 다 필요하지 않음.
기본형 :
function (value, index, array { }
 */
const numbers = [273, 52, 103, 32, 57];

// 매개변수로 value(배열에 저장된 값), index(배열인덱스), array를 갖는 콜백함수를 사용
numbers.forEach(function (value, index, array) {
    console.log(`${index}번째 요소 : ${value}`);
});

// 함수 선언한 후에 매개변수로 넘겨도 됨
const call = function (value, index, array) {
    console.log(`${index}번째 요소 : ${value}`);
};
numbers.forEach(call);

// 매개변수를 모두 사용하지 않아도 됨.
numbers.forEach(function (v, i) {
    console.log(`${i}번째 요소 : ${v}`);
});

// 매개변수로 value만 사용
numbers.forEach(function (item) {
    console.log(item);
});

// 매개변수로 index만 사용
numbers.forEach(function (item, i) {
    console.log(i);
});