let x1 = "global";
function foo() {
    let x1 = "local";
    console.log(x1);

    function bar() {
        console.log(x1);
    }
    bar(); //local
}
foo(); //local

let x2 = 10;
function foo() {
    let x2 = 100;  
    console.log(x2); // 100

    function bar() {
        console.log(x2); 
    }
    bar(); //100  
}
foo();
console.log(x2); // 10 


let x3 = 10;

function foo() {
    x3 = 100;
    console.log(x3); // 100

    function bar() {
        let x3 = 1000;
        console.log(x3);  // 1000
    }
    bar();
}
foo();
console.log(x3); // 100

//* 예제4
let foo = function() {
    let a = 3, b = 5;
    let bar = function() {
        let b = 7, c = 11;
        a += b + c;
        console.log(a);
    }
    bar(); // 21
}

foo(); // 21


//* 예제6
let x5 = 1;

function foo() {
    let x5 = 10;
    function bar() {
        console.log(x5);
    }
    bar();
}

foo(); // 10