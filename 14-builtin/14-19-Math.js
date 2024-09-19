//? 14-19-Math.js

/**
 * 수학적 계산을 사편하게 처리하는 메서드, 상수 제공
 * Math 객체는 생성자 함수가 아님
 * 정적 프로퍼티와 메서드만 제공
 */

console.log(Math.PI);

// 절댓값
console.log(Math.abs(-1)); //1
console.log(Math.abs("-1")); // 1
console.log(Math.abs("")); // 0
console.log(Math.abs([])); //0
console.log(Math.abs(null)); //0
console.log(Math.abs(undefined)); //NaN 

// 반올림
console.log(`===반올림===`);
console.log(Math.round(1.4));

// 올림
console.log(`===올림===`);
console.log(Math.ceil(1.6));

// 내림
console.log(`===내림===`);
console.log(Math.floor(1.4));
console.log(Math.floor(-1.4)); //-2

// 버림
console.log(`===버림===`);
console.log(Math.trunc(1.3456)); //1

// 제곱
console.log(`===제곱===`);
console.log(Math.pow(3, 5)); //243

// 제곱근
console.log(`===제곱근===`);
console.log(Math.sqrt(64)); //8

// 최댓값
console.log(`===최댓값===`);
console.log(Math.max(12, 123, 4, 56)); //123
// 최소값
console.log(`===최소값===`);
console.log(Math.min(12, 123, 4, 56)); //4

const arr = [1, 2, 3 ,4 ,5];
console.log(Math.max(arr)); // -NaN
console.log(Math.max(...arr)); // 5
console.log(Math.min(...arr)); // 1

console.log(Math.random()); // 0과 1사이의 실수

console.log(Math.floor(Math.random()*10)); // 0과 9 사이의 정수
console.log(Math.floor(Math.random()*10) + 1); // 1과 10 사이의 정수

// x - y 까지의 정수형태
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomInteger(11, 13));