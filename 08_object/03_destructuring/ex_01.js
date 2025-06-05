// 다음 객체에서 userId를 id라는 이름의 변수로,
// email을 mail이라는 변수로 구조 분해 할당 하세요.
const user = {
    userId: "user123",
    email: "test@example.com"
};


const { userId: id, email: mail } = user;
console.log(id, mail);


