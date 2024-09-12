
/**
 * [작명법]
 * - 기본적으로 변수명과 동일
 * - 동사로 작명
 */

// 1. 인수 X, 반환값 X
function func1() {
    console.log("인수 X, 반환값 X")
}
console.log(func1()); // undefined

// 2. 인수 X, 반환값 O
function func2() {
    return "인수 X, 반환값 O";
}
console.log(func2()); // 인수 X, 반환값 O

// 3. 인수 O, 반환값 X
function func3(str) {
    console.log(str);
}
console.log(func3("인수 O, 반환값 X")); // 인수 O, 반환값 X, undefined

// 4. 인수 O, 반환값 O
function func4(str) {
    return str;
}
console.log(func4("인수 O, 반환값 O")); // 인수 O, 반환값 O