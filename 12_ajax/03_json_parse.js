/*

JSON.parse()
JSON 포맷의 문자열(통신으로 받은 파일 or 텍스트)을 객체로 변환.
서버로부터 클라이언트에게 전송된 JSON 데이터는 문자열이고, 이 문자열을 객체로 변환.
JSON 포맷의 문자열을 객체화하는 것을 역질렬화 deserializing.

* 서버로 데이터를 전달할 때 : 객체를 Json 문자열로 바꾼 후 전송
서버에서 데이터를 받을 때 : Json 문자열을 받아서 처리를 위해 객체(객체 배열)로 변경
 */
const obj = {
    name: 'Lee',
    age: 20,
    alive: true,
    hobby: ['traveling', 'tennis'],
};
console.log(typeof obj);

// 객체를 JSON 포맷의 문자열로 변환.
const json = JSON.stringify(obj);
console.log(typeof json, json); // string

// JSON 포맷의 문자열을 객체로 변환.
const parsedObj = JSON.parse(json);
console.log(typeof parsedObj, parsedObj); // object

// JSON.stringify() 메서드는 객체뿐만 아니라 배열도 JSON 포맷의 문자열로 변환
const todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JavaScript', completed: false },
];


// 배열을 JSON 포맷의 문자열로 변환.
const jsonArray = JSON.stringify(todos, null, 2);
console.log(typeof jsonArray, jsonArray);

// JSON 포맷의 문자열을 배열로 변환, 배열의 요소까지 객체로 변환.
const parsedArray = JSON.parse(jsonArray);
console.log(typeof parsedArray, parsedArray); // object