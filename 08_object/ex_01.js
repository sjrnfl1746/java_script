/*
객체 리터널을 이용하여 다음과 같은 객체를 생성하세요.
* 객체 이름: user
* 속성:
name: "홍길동"
age: 30
isAdmin: true

그리고 아래의 조건에 따라 값을 출력하는 코드를 작성하세요.
1.	name 속성의 값을 출력하세요.
2.	age 속성을 31로 변경하세요.
3.	isAdmin 속성을 삭제하세요.
4.	객체에 새로운 속성 email을 추가하고 값은 "hong@example.com"으로 설정하세요.
5.	최종 객체를 출력하세요.
 */

const user = {
    name: '홍길동',
    age: 30,
    isAdmin: true
}
console.log(user.name);
user.age = 31;
console.log(user.age);
delete user.isAdmin;
console.log(user);
user.email = `hong@example.com`;
console.log(user);