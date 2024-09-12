/**
 * 숫자를 다루는 wrapper 객체(원시 타입의 값을 감싸서 객체로 만드는 것)
 * 자바스크립트의 모든 수는 실수(IEEE 754 국제 표준에서 정의한 64비트 부동 소수점 수로 저장)
 * number 타입
 */

// ! toString()
let num = 123;
console.log(typeof num); // number
console.log(typeof num.toString()); // string
console.log((123).toString());