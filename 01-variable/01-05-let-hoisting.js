// console.log(foo)
let foo = 1;

{
    console.log(foo)
    // let foo = 2;
    {
        console.log(foo)
        let bar = 3;
    }
    console.log(bar) // 역순으로 올라가 찾지 못함
}