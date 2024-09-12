const arr = [1, 2, 3];

// for (const value of arr) {
//     console.log(value);
// }

for (const [idx, value] of arr.entries()) {
    console.log(idx, value);
}

// 배열 고차 함수 forEach
arr.forEach(function (value, idx) {
    console.log(idx, value)
});