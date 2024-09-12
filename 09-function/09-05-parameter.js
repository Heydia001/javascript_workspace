const foo = function (p1, p2) {
    console.log(p1, p2);
}
foo(1)

function foo1(primitive) {
    primitive += 1;
    return primitive;
}

let x = 0;

console.log(foo1(x)); // call by value
console.log(x);

function changeValue(obj) {
    obj.name = "Kim";
}

const obj = {
    name: "Lee"
}

console.log(obj)
changeValue(obj); // call by reference
console.log(obj)