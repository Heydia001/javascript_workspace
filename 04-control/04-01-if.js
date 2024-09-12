/**
 * ! 조건문: 코드 블럭 실행 여부 결정
 * 1) 실행 하거나 안하거나
 * 2) 둘 중 하나 실행하기
 * 3) 여러개 중 하나 실행하기
 */

let num = 2;
let kind;

// 1번
if (num > 0) {
    kind = "양수";
}

num = -1;

// 2번
if (num > 0) {
    kind = "양수";
} else {
    kind = "음수";
}

num = 0;

// 3번
if (num > 0) {
    kind = "양수";
} else if (num < 0) {
    kind = "음수";
} else {
    kind = "영";
}

// 중괄호 블럭 생략 가능(조건: 코드가 한 줄일때)
if (num > 0) kind = "양수";
else if (num < 0) kind = "음수";
else kind = "영";

console.log(kind);