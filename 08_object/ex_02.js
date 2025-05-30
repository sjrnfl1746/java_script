/*
객체 리터널을 이용하여 아래 조건을 만족하는 객체 calculator를 생성하세요.
* 속성:
num1: 0
num2: 0
* 메서드:
setValues(a, b): num1과 num2에 각각 a와 b의 값을 설정합니다.
sum(): num1과 num2의 합을 반환합니다.
multiply(): num1과 num2의 곱을 반환합니다.

이후, setValues 메서드로 num1에 5, num2에 3을 설정한 뒤,
sum과 multiply 메서드의 결과를 출력하는 코드를 작성하세요.
 */

const calculator = {
    num1: 0,
    num2: 0,
    setValue: function (a, b) {
        [this.num1, this.num2] = [a, b]
    },
    sum: function () {
        return this.num1 + this.num2;
    },
    multiply: function () {
        return this.num1 * this.num2;
    },
}
calculator.setValue(5, 3);
console.log(`sum(): ${calculator.sum()}`);
console.log(`multiply(): ${calculator.multiply()}`);