// 배열 각 요소를 변환, 새로운 배열을 생성, 원본 배열에 영향없음
 
let arr = [1,2,3,4,5];
console.log(arr.map(num => num * 2));

arr = ["apple", "banana", "citruss", "deal"];
console.log(arr.map(str => str.toUpperCase()));

// 객체 속성값 변경
let people =[
    {name:"홍길동", age: 30},
    {name:"강감찬", age: 20},
    {name:"유관순", age: 40}
]



let result = people.map(obj => ({
    ...obj, age: obj.age + 1
}))
console.log(result);

// 빈 배열에 적용
arr = [];
arr.map(item => item * 2)

// console.log(people.map(person => person.name));

// 매개번수 인덱스 사용(value, index)
arr = ["apple", "banana", "citruss", "deal"];
console.log(arr.map((value, index) => `${index + 1} : ${value}`));