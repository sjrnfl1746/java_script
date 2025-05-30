/*
3. 생성자
1) 생성자와 객체로 생성하기
클래스가 도입되기 전의 자바 스크립트는 '생성자라고 하는 함수'로 객체를 생성할 수 있음.
 */

function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
}

// 생성자 함수로 객체를 생성할 때는 new 연산자를 사용.
const card2 = new Card('하트', 'A');

/*
이 코드를 실행하면 suit 프로퍼티에는 '하트', rank 프로퍼티에는 'A'라는 값이 저장된 객체에 생성되고,
마지막으로 그 객체의 참조가 변수 card에 할당.

이때 Card 생성자 함수로 생성한 객체를 Card 객체라고 부름.
console.log로 객체를 출력하면 생성자 이름이 표시.
 */
console.log(card2);