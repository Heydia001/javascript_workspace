/**
 * [동등 비교]
 * - 값의 일치 여부
 */

console.log(5 == "5"); // true
console.log(5 == "8"); // false


console.log('' == 0); // true
console.log('' == '0'); // false
console.log(false == ''); // true
console.log(false == 'false'); // false

console.log(false == undefined); // false
console.log(false == Boolean(undefined)); // true

console.log(0 == -0); // true

/**
 * [일치 연산자]
 * - 값, 타입 모두 비교
 * - 가급적 일치 연산자 쓰세요~
 */
console.log(0 === -0); // true
console.log(Object.is(0, -0)); // false

console.log(0 === '0'); // false
console.log(0 === +'0'); // true

/**
 * [부동등 비교]
 */
console.log(5 != 5); // false
console.log(5 != '6'); // true

/**
 * [불일치 비교]
 * - 값, 타입 모두 비교
 */
console.log(5 !== '5') // true

/**
 * [대소 관계 비교]
 * - 값만 비교
 */
console.log(1 < 2); // true
console.log(1 < '2'); // true
console.log(2 >= '2'); // true
console.log(2 <= Number(Boolean('2'))); // false
