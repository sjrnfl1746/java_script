/*

*
**
***
****
*****
 */

/* 중첩 반복문
반복문을 여러 겹 중첩해 사용.
별을 찍는 예제의 경우 안에 있는 중첩 for문의 조건문에서 상위의 i 값을 사용
 */

let stars ="";

for (let i = 1; i <= 5; i++) { // 줄 단위
    // console.log(i)
    for (let j = 1; j <= i; j++) { // 한줄의 별 갯수
        stars += "*";
    }
    stars += "\n";
}
console.log(stars);