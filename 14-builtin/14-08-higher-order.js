// 고차함수
/**
 * 일급 객체함수
 * 1. 익명의 리터럴로 표현 가능
 * 2. 변수, 자료구조에 저장가능
 * 3. 함수의 매개변수에 전달 가능
 * 4. 반환값으로 사용 가능
 * 고차함수 : 위 3, 4에 해당 되는 함수
 */

function operateOnArray(arr, operation) {
    const result = [];
    for(let num of arr) {
        result.push(operation(num))
    }
    return result;
}

let nums = [1,2,3];
console.log(operateOnArray(nums,(num) => num * 2));

function makeMul(factor) {
    return function (num1) {
        return num1 * factor;
    }
}
let doubler = makeMul(2)
console.log(doubler(5));