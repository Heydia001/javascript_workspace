let arr = [1, 2, 3, 4, 5]; // object
console.log(arr.toString()); // string
arr = [1 ,'a' ,2 ,'b'];
console.log(typeof arr.toString()); // string
console.log(arr.toString()); // 1,a,2,b

//! join()


//! push(), pop(), shift(), unshift()

let arr1 = [];

arr1.push("문자열 1");
arr1.push("문자열 2");
arr1.push("문자열 3");
arr1.push("문자열 4");
arr1.push("문자열 5");


let str = arr1.pop(); // 배열의 요소를 제거하고, 제거한 요소를 반환
console.log(str);
console.log(arr1); // [ '문자열 1', '문자열 2', '문자열 3', '문자열 4' ]


//shift() 0번에 있는 요소를 제거, 제거한 요소를 반환
let str2 = arr1.shift();
console.log(str2);
console.log(arr1); //[ '문자열 2', '문자열 3', '문자열 4' ]

// unshift() 배열의 시작 부분에 하나 이상의 요소를 추가하는 데 사용됩니다.
// 이 메소드는 원래 배열을 수정하고 배열의 새로운 길이를 반환합니다.
arr1.unshift(1, 5, 6);
console.log(arr1); // [ 1, 5, 6, '문자열 2', '문자열 3', '문자열 4' ]

//! fill()
let arr2 = new Array(10).fill(5);
console.log(arr2);

//! from()
let arr3 = Array.from("hi");
console.log(arr3); 

let arrLike = {length: 5, 0: "a", 1: "b"};
console.log(arrLike[0]);


let arr5 = Array.from({length: 5}, function(value, index) {
    return index;
});

console.log(arr5);

let arr6 = Array.from([10, 20, 30, 40, 50], function(value, index) {
    return value + index;
});

console.log(arr6); // [ 10, 21, 32, 43, 54 ]

