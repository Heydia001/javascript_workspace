const person = {
    "first-name": "il-nam",
    "last-name": "Kim",
    age: 99,
    1: 1
}

const personArr = Object.keys(person);
console.log(personArr)

// for (let i = 0; i < personArr.length; i++) {
//     console.log(person[personArr[i]])
// }

// 객체 순회
for (let prop in person) {
    console.log(person[prop])
}

// 배열 순회
const arr = ["one", "two"];

for (let index in arr) {
    console.log(arr[index])
}

// 문자열 순회
const str = "javascript";

for (let c in str) {
    console.log(str[c])
}