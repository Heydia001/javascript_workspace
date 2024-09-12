let x;

x = 10;
console.log(x);

// x = x + 5;
x += 5;
console.log(x); // 15

// x = x - 5;
x -= 5;
console.log(x); // 10

x *= 2;
console.log(x); // 20

x /= 2;
console.log(x); // 10

x %= 3;
console.log(x); // 1

let str = "Hello ";
// str = str + "Javascript!"
str += "Javascript!"
console.log(str)

// 연쇄 할당
str1 = str2 = str3 = str + "!!";
console.log(str1)
console.log(str2)
console.log(str3)