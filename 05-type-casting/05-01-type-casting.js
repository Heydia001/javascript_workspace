let x = 10;
console.log(typeof x) // number

// 명시적 타입 변환
// let xStr = x.toString();
let xStr = String(x);
console.log(typeof xStr);

// 암묵적 타입 변환(number to string)
let xStr2 = x + '';
console.log(typeof xStr2) // string

// 암묵적 타입 변환(string to number)
let xNum = x - "1";
console.log(typeof xNum);

let xNum2 = x * "1";
console.log(typeof xNum2);

console.log(Boolean('0') == 0) // false
// 비교 연산자는 숫자 타입이 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환한다.
console.log('0' == 0) // true
console.log('' == 0) // true
console.log('-1' == -1) // true

console.log((!"-1") == -1) // false
console.log(!!"-1" == -1) // false