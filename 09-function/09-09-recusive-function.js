//* 재귀 함수
// 팩토리얼
// 1 * 2 * 3 * 4 * 5 = 120

//* 반복문을 이용한 팩토리얼
function factorialFor(n) {
    let result = 1;
    if (n < 2) return 1;

    for (let num = 1; num <= n; num++) {
        result *= num;
    }

    return result;
}

console.log(factorialFor(5));

// 재귀 함수를 이용한 팩토리얼
function factorial(n) {
    let result = 1;
    if (n < 2) return 1;

    return factorial(n-1) * n;
}

console.log(factorial(3));

