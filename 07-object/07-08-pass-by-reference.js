const foo = {
    val: 10
};
// foo.val = 20;
// console.log(foo)

const bar = foo;
console.log(foo)
console.log(bar)
console.log(foo.val === bar.val)

bar.val = 20;
console.log(foo)
console.log(bar)