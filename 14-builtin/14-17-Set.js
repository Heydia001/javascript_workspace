//? Set
/**
정복된 값이 없는 고유한 값들을 저장하는 객체
삽입된 순서대로 값 저장(정렬이 필요한 경우 배열로 변환 후 정렬)
원시 값, 모든 객체 저장 가능
순회가능
 */

let mySet = new Set();
console.log(mySet);

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1);
mySet.add(2);
mySet.add(3);
console.log(mySet); // Set(3) { 1, 2, 3 } -> 중복값이 제거된 채 출력 됨

// mySet = new Set(1, 2, 3); - TypeError: number 1 is not iterable (cannot read property Symbol(Symbol.iterator))
mySet = new Set([1, 2, 3, 1, 1, 1]);
console.log(mySet) // Set(3) { 1, 2, 3 }
console.log(mySet.has(1)); //true, 값의 존재확인
console.log(mySet.has(4)); //false
mySet.delete(2); // index로써의 요소 접근은 X
console.log(mySet) //Set(2) { 1, 3 }
console.log(mySet.size); // 2

mySet.forEach(v => console.log(v));

mySet.clear();
console.log(mySet); // Set(0) {}

console.log(undefined === undefined); //true
console.log(NaN === NaN); //false

mySet.add(NaN);
mySet.add(NaN);
mySet.add(NaN);
console.log(mySet); // Set(1) { NaN } - 중복되 NaN 무시

mySet = new Set([4, 5, 6]);
console.log(mySet); //Set(3) { 4, 5, 6 }
const arr = Array.from(mySet);
console.log(arr); // [ 4, 5, 6 ]
console.log(Array.isArray(arr)); // true

//spread 연산자
const arr2 = [...mySet];
console.log(arr2); //[ 4, 5, 6 ]

