let foo;
console.log(foo); // undefined

foo = "kim";
foo = null; // 가비지 콜렉터
// foo = undefined
console.log(foo)
console.log(typeof foo) // object
console.log(typeof foo === null) // false

// null, undefined, NaN, 0