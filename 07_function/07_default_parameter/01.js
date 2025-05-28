/*

* 기본 매개 변수
'매개 변수에 기본 값을 지정', 매개 변수가 들어오지 않는 경우에 기본 값으로 대체.
기본 매개 변수와 일반 매개 변수를 섞어서 사용할 경우에는 기본 매개 변수가 오른쪽으로 가야됨.
 */
const earning = function (name, wage = 12000, hours = 40) {
    console.log(`#${name} 님의 급여 정보`);
    console.log(`- 시급: ${wage}원`);
    console.log(`- 근무 시간: ${hours}시간`);
    console.log(`- 급여: ${wage * hours}원`);
    console.log(``);
}
// 시급 1만원으로 52시간 일한 경우
earning('tom', 10000, 52);

// 시급 1만원으로 최대한 일하는 경우
earning('adam', 10000);

earning('smith');