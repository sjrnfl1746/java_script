/*
다음 조건에 따라 도서 정보를 관리하는 생성자 함수를 작성하세요.
1.	생성자 함수 이름: Book
2.	프로퍼티:
- title: 책 제목 (생성자 함수 호출 시 전달받음)
- author: 저자 이름 (생성자 함수 호출 시 전달받음)
- price: 가격 (생성자 함수 호출 시 전달받음)
- isSoldOut: 품절 여부 (초기값 false)
3.	메서드:
- setSoldOut(): isSoldOut 값을 true로 변경합니다.
- discount(rate): 책 가격을 rate(백분율)만큼 할인합니다. (예: rate가 10이면 10% 할인)
- getInfo(): 책의 제목, 저자, 가격, 품절 여부를 문자열로 반환합니다.
    예: "제목: JavaScript Basics, 저자: John Doe, 가격: 18000원, 품절 여부: false"

* 요구사항
1.	Book 생성자 함수를 사용하여 새로운 도서 객체를 생성하세요.
- 제목: "JavaScript Basics"
- 저자: "John Doe"
- 가격: 20000
2.	discount 메서드를 호출하여 가격을 10% 할인하세요.
3.	setSoldOut 메서드를 호출하여 품절 상태로 변경하세요.
4.	getInfo 메서드를 호출하여 도서 정보를 출력하세요.
 */
// 생성자
function Book(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.isSoldOut = false;
}

// 메서드
Book.prototype.setSoldOut = function () {
    this.isSoldOut = true;
}
Book.prototype.discount = function (rate) {
    this.price = this.price * (1 - rate / 100);
}
Book.prototype.getInfo = function () {
    return `제목: ${this.title}, 저자: ${this.author}, 가격: ${this.price}원, 품절 여부 : ${this.isSoldOut}`;
}

// main
const book = new Book('JavaScript Basics', 'John Doe', 20000);
book.discount(10);
book.setSoldOut();
console.log(book.getInfo());