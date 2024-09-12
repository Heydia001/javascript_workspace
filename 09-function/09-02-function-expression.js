// 함수 선언문
function func(number) {
    return number * number;
}
console.log(func(2));

// 함수 표현식
// 기명 함수 표현식
// const funcExp = function mul(number) {
//     return number * number;
// }

// * 익명 함수 표현식
const funcExp = function (number) {
    return number * number;
}
console.log(funcExp(4));
// console.log(mul(4));

// Function 생성자 함수
const funcConst = new Function("number", "return number * number");
console.log(funcConst(5));