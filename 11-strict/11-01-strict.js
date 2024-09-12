/**
 * !. ES5에서 추가
 * 2. 자바스크립트에서 문법을 보다 엄격히 적용
 * 3. 문제를 일으킬 수 잇는 코드에 명시적 에서 발생
 */
"use strict";
let x = 10;
console.log(x);

function foo() {
    x = 20;
    "use strict";
    return x;
}

console.log(foo());