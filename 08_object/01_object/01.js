/*
1. 객체의 생성

자바스크립트의 객체는 이름과 값을 한 쌍으로 묶은 집합.
이름과 값이 한 쌍으로 이룬 것을 프로퍼티라고 하고, 그 것의 이름을 프로퍼티 이름 또는 키 key라고 함.
값으로는 모든 데이터 타입의 데이터(원시값, 객체)를 저장할 수 있으며, 함수의 참조를 값으로 가진 프로퍼티는 메서드라는 이름으로 부름.

일반적으로 객체를 생성하려면 3가지 방법을 사용.
 */

// 1) 객체 리터널로 생성하는 방법
const card1 = {suit: '하트', rank: 'A'};
console.log(card1);
console.log(card1.suit);

// 2) 생성자 함수로 생성하는 방법
function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
}
const card2 = new Card('하트', 'A');
console.log(card2);

// 3) Object.create로 생성하는 방법
const card3 = Object.create(Object.prototype, {
    suit: {
        value: '하트',
        writable: true,
        enumerable: true,
        configurable: true
    },
    rank: {
        value: 'A',
        writable: true,
        enumerable: true,
        configurable: true
    }
})
console.log(card3);