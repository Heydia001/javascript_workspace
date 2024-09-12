/**
 * ! 반복 횟수가 정해져 있지 않을때
 * ! 무한 루프 가능
 */
let count = 0;

while (count < 3) {
    console.log(count);
    count++;
}

while(true) {
    console.log(count);
    count++;
    // if (count === 10) {
    //     break;
    // }
    if (count === 10) break;
    console.log("반복문 실행중...")
}