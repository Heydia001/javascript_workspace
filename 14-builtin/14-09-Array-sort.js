let arr = ["banana", "apple", "cherry"];
arr.sort(); // -> 원본 변경
console.log(arr); // 알파벳 오름 차순

arr = [10, 1, 21, 3];
arr.sort();
console.log(arr); // [ 1, 10, 21, 3 ] ->  첫 자리가 작은 순서부터 정렬

arr.sort((a, b) => a - b); // [ 1, 3, 10, 21 ]
// a - b 가 양수이면 swap
// 음수라면 스왑 X
console.log(arr);

arr.sort((a, b) => b - a); // [ 21, 10, 3, 1 ]
// 내림차순
console.log(arr);

arr = [
    {name: "홍길동", age: 50},
    {name: "강감찬", age: 20},
    {name: "유관순", age: 80},
    {name: "아무개", age: 40}
]

arr.sort((a, b) => {
    return a.age - b.age;
})

console.log(arr);

// [
//     { name: '강감찬', age: 20 },
//     { name: '아무개', age: 40 },
//     { name: '홍길동', age: 50 },
//     { name: '유관순', age: 80 }
//   ]

arr.sort((a, b) => {
    return b.age - a.age;
})

console.log(arr);

// [
//     { name: '유관순', age: 80 },
//     { name: '홍길동', age: 50 },
//     { name: '아무개', age: 40 },
//     { name: '강감찬', age: 20 }
//   ]