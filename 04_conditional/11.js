const date = new Date();
const hour = date.getHours();

if (hour < 11) {
    console.log('아침 먹을 시간입니다.');
} else if (hour < 15) {
    console.log('점심 먹을 시간입니다.')
} else {
    console.log('저녁 먹을 시간입니다.')
}