// 원본 배열 변경
let arr = [1, 2, 3, 4, 5];

// arr.splice(0, 2);
// console.log(arr); // [3, 4, 5 ]

console.log(arr.splice(1, 3, 6, 6, 6), `----`);
console.log(arr); 