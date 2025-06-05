// 다음 중첩된 객체를 JSON 문자열로 변환하고 다시 객체로 복원한 후,
// 복원된 객체에서 name 값을 출력하세요.

const data = {
    id: 1,
    user: {
        name: "Bob",
        email: "bob@email.com"
    }
};

// 여기에 코드 작성
const str = JSON.stringify(data);
console.log(data);

const obj = JSON.parse(str);
console.log(typeof obj);
console.log(obj.user.name);