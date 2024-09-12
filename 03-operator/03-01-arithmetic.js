let x = 5;
let result;

// 선대입 후증가
result = x++;
console.log(result, x) // 5 6

// 후대입 선증가
result = ++x;
console.log(result, x) // 7 7

// 선대입 후감소
result = x--;
console.log(result, x) // 7 6

// 후대입 선감소
result = --x;
console.log(result, x) // 5 5

let strNum = "10";
console.log("string 10 :",  typeof strNum, strNum + "10")
console.log("number 10 :",  typeof +strNum, +strNum + 10)
console.log("number 10 :",  typeof +strNum, 10 + +"10")
console.log("number 10 :",  typeof Number(strNum), 10 + Number("10"))
console.log(typeof -strNum)
console.log(+"abc")
console.log(typeof NaN)
console.log(Boolean(NaN))
console.log(null === null)
console.log(NaN === NaN) // false
console.log(0 === -0) // false
console.log(Object.is(0, -0)) // false
console.log(Object.is(NaN, NaN)) // false

console.log(1 + true)
console.log(1 + false)
console.log(true + true)

console.log(1 + undefined) // NaN

console.log(Boolean("0")) // true

const arr = []
console.log(Boolean(arr)) // true
console.log(Boolean(arr.length !== 0)) // false

const obj = {}
console.log(Boolean(obj))
console.log(Object.keys(obj).length !== 0)

console.log(isNaN("0"))
console.log(isNaN(0))
console.log(isNaN("a"))