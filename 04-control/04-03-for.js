/**
 * ! 반복 횟수가 정해져 있을때
 */
for (let i = 0; i < 10; i++) {
    console.log(i)
}

// 중첩
// ijkmn...
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i + j === 5) {
            console.log("[" + i + ", " + j + "]")
        }
    }
}

// 구구단
for (let i = 2; i <= 9; i++) {
    console.log(i + "단")
    for (let j = 1; j <= 9; j++) {
        // console.log(i + "×" + j + "=" + (i * j))
        console.log(`${i} × ${j} = ${i * j}`)
    }
}

