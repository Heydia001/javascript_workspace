// 기명 즉시 실행 함수 
(function myFunc(c) {
    let a = 3;
    let b = 5;
    let result = a * b * c;
    console.log(result);
})(2);

// myFunc(); // 호출 불가(재사용 불가)

// 익명 즉시 실행 함수 
(function (c) {
    let a = 3;
    let b = 5;
    let result = a * b * c;
    console.log(result);
})(2);

// myFunc(); // 호출 불가(재사용 불가)