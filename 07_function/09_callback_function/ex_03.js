/*
다음 문자열 배열을 대문자로 변환하여 새 벼열에 담아 출력하세요.

문자열.toUpperCase()
 */

const name = ["alice", "bob", "charlie"];
const upperNames = [];

// forEach를 사용하여 upperNames에 대문자 버전을 저장하세요.

name.forEach((value) => {
    upperNames.push(value.toUpperCase());
})

name.forEach((vlaue, index) => {
    upperNames[index] = vlaue.toUpperCase();
})

console.log(upperNames); // 예상결과 : ["ALICE", "BOB", "CHARLIE"]