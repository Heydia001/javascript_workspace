// 레이블 블록문
let count = 0;
console.log(1);

foo: {
    console.log(2);
    count = 1;
    if (count === 1) {
        break foo;
    }
    console.log(3);
    console.log(4);
    console.log(5);
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i + j === 3) {
            console.log(i + j)
        }
    }
}

outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i + j === 3) {
            console.log(i + j)
            break outer;
        }
    }
}