// 조건에 맞는 요소만 선택해서 새로운 배열 생성
// 원본 배열 변경 안함

let arr = [1, 2, 3 ,4 ,5 ,6];

let result = arr.filter(i => i % 2 === 0);
console.log(result);

arr = [
    {name: "홍길동", age: 50},
    {name: "강감찬", age: 20},
    {name: "유관순", age: 80},
    {name: "아무개", age: 40}
]

result = arr.filter(i => i.age > 30);
console.log(result);
