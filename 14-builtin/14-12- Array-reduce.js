// 배열의 각 요소에 대해 주어진 리듀스 함수를 실행하여 하나의 값을 반환

let arr = [1,2,3,4,5];
// arr.reduce(함수, 초기 값);
// let result = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let result1 = arr.reduce((accumulator, currentValue) => {
    accumulator += currentValue;
    return accumulator;
}, 0);

// reduce는 인수를 2개 가지는 함수를 매개변수로 가짐
console.log(result1);

//! 초기값은 생략 가능하다. 초기값을 설정하는 것은 중요
let result2 = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 1);
console.log(result2);

let objArr = [
    {item: "apple", price: 2000},
    {item: "banana", price: 1000},
    {item: "orange", price: 1500}
] 

//# 1. reduce()
// : 배열의 각 요소에 대해 함수를 적용하여 '단일 값을 생성'

//* 기본 형태(구조)
/*
? reduce 메서드의 인자값: 콜백함수, 초기값(initialValue)
배열명.reduce((accumulator, currentValue, currentIndex, array) => {
  
}, initialValue);
*/

//* reduce 콜백함수의 인자값
// 1. accumulator - 각각의 순회마다 축적되는 값

// >> 이전 작업물의 반환값 (이전 리듀서 호출의 반환값)
// : 첫 번째 호출에서는 initialValue값이 지정

// 2. currentValue - 현재 순회되는 요소

// 3. currentIndex (선택)
// 4. array (선택)

// +) initialValue
// : 초기값, 생략 시 배열의 첫 번째 요소값 (선택)
console.log(objArr.reduce((acc, curr) => acc += curr.price, 0))

arr = [1,2,3,4,5];
let result3 = arr.reduce((acc, curr) => curr > acc ? curr : acc, arr[0]);
console.log(result3);

let people =[
    {id: 1, name:"홍길동", age: 30},
    {id: 2, name:"강감찬", age: 20},
    {id: 3, name:"유관순", age: 40}
];

result = people.reduce((acc, curr) =>{
    const {id, name, age} = curr;
    acc[id] = {name, age};
    return acc;
},{});

console.log(result)