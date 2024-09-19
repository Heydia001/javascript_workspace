// forEach 메소드는 for 문 대신 사용할 수 있다.

let arr = [1,2,3,4,5];
arr.forEach(num => 
    console.log(num)
); 

// foreach는 반환값이 없다.

let arr2 = ["apple", "banana", "citruss", "deal"];
arr2.forEach(str => {
   console.log(str.toUpperCase()); 
})

let people =[
    {name:"홍길동", age: 30},
    {name:"강감찬", age: 20},
    {name:"유관순", age: 40}
]

people.forEach(person => {
    console.log(`${person.name}님, 환영합니다.`)
})

let arr3 = [1,2,3,4,5];
const newArr = [];

arr3.forEach(num => {
    newArr.push(num * 2);
})

console.log(newArr);

let arr4 = [1,2,3,4,5];
let keys = ["a","b","c","d","e"];
