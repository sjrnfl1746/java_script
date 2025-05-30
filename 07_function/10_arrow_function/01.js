/*

* 화살표 함수 Arrow function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

ES6에 추가된 내용으로 '=>'를 이용하여 함수를 간결하게 표현할 때 사용.

1) function 키워드를 생략하고
2) 부등호 '='과 '>'를 합쳐서 코딩하고
3) 항상 익명함수 형식으로 표현
4) 단일 명령문일 경우 함수의 중괄호 {} 와 return을 생략.
 */
const doAddition1 = function (s1, s2) {
    return (s1 + s2) / 2;
}
console.log(doAddition1(2, 5)); // 3.5

// function 키워드를 생략하고, 부등호 '='과 '>'를 합쳐서 코딩
const doAddition2 = (s1, s2) => {
    return (s1 + s2) / 2;
}
console.log(doAddition1(2, 5)); // 3.5

// 단일 명령문일 경우 함수의 중괄호 {} 와 return을 생략.
const doAddition3 = (s1, s2) => (s1 + s2) / 2;
console.log(doAddition1(2, 5)); // 3.5