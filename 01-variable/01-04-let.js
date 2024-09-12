let foo = 123; // 전역(global) 변수

console.log(foo);

{
  let foo = 456; // 지역(local) 변수
}

// let foo = 789; // 재 선언 불가
foo = 789;

console.log(foo);