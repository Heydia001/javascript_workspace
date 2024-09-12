console.log("시작")

const showMsg = function () {
    console.log("2초가 지났습니다!")
}

// showMsg();

// 함수의 인수로 사용하는 함수, 콜백 함수
setTimeout(showMsg, 2000); // 비동기 처리

console.log("끝1");
console.log("끝2");
console.log("끝3");