const myFun = function (a) {
    console.log(a);
}

/* 자바스크립트는 인수와 매개변수의 개수가 달라도 에러가 나지 않음. */
myFun(); // undefined
myFun(1); // 1
myFun(1, 2); // 1
myFun(1, 2, 3); // 1