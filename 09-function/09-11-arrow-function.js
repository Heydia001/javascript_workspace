// ES5
const pow = function (x) {
    return x * x;
}

// ES6
const powArrow = (x) => x * x;


//* setTimeout 예제
const [x, y] = [2, 3];
setTimeout(function () {
    console.log(x + y);
}, 2000);

setTimeout(() => console.log(x + y), 2000);

//* 고차함수에서의 화살표 함수
const arr2 = [1, 2, 3];
console.log(arr2);

// arr2[0] = 2; 
// arr2[1] *= 2;
// arr2[2] *= 2;
// console.log(arr2)

const result = arr2.map(function (X) {
    return x * 2;
})

console.log(arr2);

const result1 = arr2.map((x) => { x * 2 });