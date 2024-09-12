var global = "global";
// ^ 전역변수
function foo() {
    var local = "local";
    // ^ 지역변수
    console.log(global);
    console.log(local);
}
foo();
// global
// local

console.log(global);
// console.log(local); -ReferenceError: local is not defined 
// ^ 함수에 직접 접근 X

console.log("-----------");
if(true) {
    var localTest1 = "localTest1";
    const localTest2 = "localTest2";
}
console.log(localTest1);
// console.log(localTest2); -ReferenceError: localTest2 is not defined

// var 쓰는것은 지양
