/*

* const로 정의한 변수를 변경할 수 있는 예.
문자열이나 수치 등 1) 프리미티브 타입 primitive type 이라 불리는 종류의 데이터는 const를 이용해 정의한 경우 덮어 쓸 수 없음.
하지만 객체나 배열 등 2) 오브젝트 타입 object type 이라 불리는 데이터들은 const로 정의해도 도중에 값을 변경할 수 있음.

* 프리미티브 타입
논리값 Boolean : true / false
수치 Number : 1, 2.5
문자열 String
Undefined : 미정의
null 값 없음
Symbol : 유일하게 바꿀 수 없는 값

* 오브젝트 값
객체
배열
함수 등 프리미티브 타입 이외의 것.
 */
// const를 이용해 정의한 개체의 속성값을 변경, 추가 하는 예
// 객체 정의
const obj1 = {
    name: '길동',
    age: 20,
}
console.log(obj1.age);

// 속성값 변경
obj1.age = 21;
console.log(obj1.age);

// 속성 추가
obj1.address = 'daegu';
console.log(obj1.address);
// const로 정의해도 객체 내용은 자유롭게 변경할 수 있음.
// 즉, 객체를 정의할 때는 기본적으로 const를 이용.

// 재할당은 에러가 남
// obj1 = {
//     name: '길동',
//     age: 24,
// };