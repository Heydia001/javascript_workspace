let integer = 65;
let double = 65.0;
let binary = 0b01000001;
let hex = 0x41;

console.log(integer)
console.log(double)
console.log(binary)
console.log(hex)

console.log(integer === binary)
console.log(hex === binary)

console.log(1 === 1.0)

console.log(5/2)
console.log(5/0) // Infinity
console.log(5/-0) // -Infinity

console.log(1 * "str") // NaN

console.log(typeof hex) // number
