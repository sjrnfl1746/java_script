const obj = {
    name: 'Lee',
    age: 20,
    alive: true,
    hobby: ['traveling', 'tennis'],
};
console.log(typeof obj); // obj

// 객체를 JSON 포맷의 문자열로 변환.
const json = JSON.stringify(obj);
console.log(typeof json, json); // string {"name":"Lee","age":20,"alive":true,"hobby":["traveling","tennis"]}


// 객체를 JSON 포맷의 문자열로 변환하면서 들여쓰기 함.
const prettyJson = JSON.stringify(obj, null, 2);
console.log(typeof prettyJson, prettyJson);


// replacer 예
// 값의 타입이 Number이면 필터링이되어 변환하지 않는다.
function filter(key, value) {
    // undefined: 반환하지 않음
    return typeof value === 'number' ? undefined : value;
}
const strFilteredObject = JSON.stringify(obj, filter, 2);
console.log(typeof strFilteredObject, strFilteredObject);

// JSON.stringify() 메서드는 객체뿐만 아니라 배열도 JSON 포맷의 문자열로 변환
const todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JavaScript', completed: false },
];


// 배열을 JSON 포맷의 문자열로 변환.
const jsonArray = JSON.stringify(todos, null, 2);
console.log(typeof jsonArray, jsonArray);