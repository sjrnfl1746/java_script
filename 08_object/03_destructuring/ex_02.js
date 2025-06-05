// 전달받은 객체에서 name과 age를 구조 분해로 꺼내 출력하는 함수를 작성하세요.

function printInfo(/* 여기에 구조 분해 */{name, age}) {
    console.log(`이름: ${name}, 나이: ${age}`);
}

const userInfo = {
    name: "choi",
    age: 22,
    gender: "M"
};

// const {name, age} = userInfo
// console.log(name);
// console.log(age);

printInfo(userInfo);