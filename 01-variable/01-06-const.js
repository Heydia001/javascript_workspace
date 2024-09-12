var foo = 1;
foo = 2;

let bar = 3;
bar = 4;

const FOO = 5;
// FOO = 6; // 값 변경(재할당) 불가

{
    const fooBlock = 10;
    {
        console.log(fooBlock)
    }
}