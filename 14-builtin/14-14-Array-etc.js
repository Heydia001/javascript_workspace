//? find()
// 배열에서 주어진 조건을 만족하는 첛 번째 요소 반환
// 없으면 undefined
let arr = [1, 2, 3, 4, 5];
let result = arr.find(num => num > 2);
console.log(result);

//? some() 
// OR 연산
// 배열의 요소 중 하나라고 조건을 만족하면 true, 아니면 false
arr = [1, 2, 3, 4, 5];
result = arr.some(num => num > 6);
console.log(result); //false

//? every()
// And 연산
arr = [1, 2, 3, 4, 5];
result = arr.every(num => num > 6);
console.log(result); //false
result = arr.every(num => num < 6);
console.log(result); //true


//? include()
// 배열이 특정한 요소를 포함하고 있으면 true, 아니면 false
result = arr.includes(1);
console.log(result); // true
result = arr.includes(6);
console.log(result); // false

//? indexOf()
// 배열에서 특정요소의 인덱스 반환(첫 번째 요소)
arr = [1, 2, 3, 4, 5, 1 ,2 ,3];
result = arr.indexOf(3);
console.log(result); // 2 -> 인덱스 번호 2 반환

//? findIndex()
// 배열에서 주어진 조건을 만족하는 첫 번째 요소 인덱스 반환
// 없으면 -1

arr = [1, 2, 3, 4, 5, 1 ,2 ,3];
result = arr.findIndex(num => num > 2);
console.log(result) // 2

//? flat() // 다차원 배열을 평탄화 하여 1차원 배열 반환
arr = [1,[2 ,3,[4, 5]]];
result = arr.flat(3); // 인수는 평탄화 할 depth
console.log(result); // [ 1, 2, 3, 4, 5 ]

//? flatMap()
// 각 요소에 대해 주어진 함수를 실행
result = arr.flatMap(num => [num, num * 2])
console.log(result);