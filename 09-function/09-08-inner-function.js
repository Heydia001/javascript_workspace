//* case1
function parent(param) {
    let parentVar = param;

    function child() {
        var childVar = "Kim";
        console.log(parentVar + " " + childVar);
    }

    child();
    console.log(parentVar);
    // console.log(childVar); //! 불가
}

parent("Hello");

//* case2
function sayHello(name) {
    let text = "Hello " + name;

    const logHello = function () {
        console.log(text);
    };

    logHello();
}
sayHello("Lee");
// logHello(); //! 불가
// sayHello.logHello(); //! 불가
