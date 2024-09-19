//? 15-02-rest-parameter.js
// 나머지 매개 변수
function func1(...rest){
    console.log(rest); // - 배열로 변환
}

func1(1, 2, 3, 4, 5); //[ 1, 2, 3, 4, 5 ]


function func2(parm1, parm2, ...rest){ //Rest 파라미터는 반드시 마지막 파라미터
    console.log(parm1);
    console.log(parm2);
    console.log(rest);
}

func2(1, 2, 3, 4, 5); // [ 3, 4, 5 ]
func2(1, 2); // 
