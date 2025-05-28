/*

이전 예제를 반대로 만들어 볼 것

*****
****
***
**
*
 */

let stars = "";

for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    stars += "\n";
}
console.log(stars);