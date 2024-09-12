// ! length
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let alphabetLength = alphabet.length;
console.log(alphabetLength);

// ! indexOf()
let str = "Hello, world!";
let index = str.indexOf("world");
console.log(index) // 7

let firstO = str.indexOf("o");
console.log(firstO); // 4, 왼쪽부터 찾고 첫번째의 인덱스 반환

let notFound = str.indexOf("JavaScript");
console.log(notFound); // ! -1

// ! lastIndexOf()
let lastIndex = str.lastIndexOf("o");
console.log(lastIndex) // 8, 오른쪽부터 찾고 첫번째의 인덱스 반환

// ! slice()
str = "Hello, world!";

let hello = str.slice(0, 5);
console.log(hello)
console.log(str) // 원본을 변경하지 않음

let world = str.slice(7);
console.log(world)

let lastPart = str.slice(-1);
console.log(lastPart)

let partial = str.slice(7, -1);
console.log(partial)

// ! subString()
str = "Hello, world!";

let helloSub = str.substring(0, 5);
console.log(helloSub)

let worldSub = str.substring(7);
console.log(worldSub)

let reversed = str.substring(4, 2); // 시작 인덱스 2, 끝 인덱스 4
console.log(reversed)

let negative = str.substring(-6); // Hello, world! : 음수는 0
console.log(negative)

// ! replace()
str = "Hello, world!";

let worldToJavaScript = str.replace("world", "JavaScript")
console.log(worldToJavaScript);
console.log(str); // 원본 유지

let caseSensitive = str.replace("hello", "Hi");
console.log(caseSensitive);

caseSensitive = str.replace(/hello/i, "Hi"); // insensitive : 대소문자 구분하지 않음
console.log(caseSensitive);

let reaplceAll = str.replace(/o/g, "O"); // 문자열에서 모든 o를 찾음
console.log(reaplceAll);

// ! toUpperCase()
let upperCase = str.toUpperCase();
console.log(upperCase);

let lowerCase = str.toLowerCase();
console.log(lowerCase);

// ! concat()
let strConcat1 = "Hello", strConcat2 = "world", strConcat3 = "!";

let resultStrConcat =  strConcat1.concat(", ", strConcat2, strConcat3, "!!");
console.log(resultStrConcat);

// ! trim()
let strTrim = "    Hello, world!    ";
console.log(strTrim.trim());

let strEmpty = "          ";
console.log(strEmpty.trim().length); // 0

// ! padStart()
// 오른쪽 정렬
let strPadStart = "42";

let paddedStart = strPadStart.padStart(5, "*");
console.log(paddedStart) // ***42

// ! padEnd()
// 왼쪽 정렬
let strPadEnd = "42";

let paddedEnd = strPadEnd.padEnd(5, "0");
console.log(paddedEnd) // 42000

// ! charAt(), charCodeAt()
str = "Hello, world!";

let firstChar = str.charAt(7); // 기본값 0
console.log(firstChar); // w
console.log(firstChar.charCodeAt()); // 119 : 유니코드
console.log(typeof str.charCodeAt(7)); // number

let outOfRangeChar = str.charAt(100);
console.log(outOfRangeChar); // ""

// ! startWith()
let url = "http://website.com";
console.log(url.startsWith("http://")); // true

if (url.startsWith("http://") || url.startsWith("https://")) {
    console.log("올바른 형식입니다.")
} else {
    console.log("올바르지 않은 형식입니다.")
}

// ! endWith()
let file = "file.pdf";
console.log(file.endsWith(".pdf")); // true

if (file.endsWith(".exe")) {
    console.log("올바른 형식입니다.")
} else {
    console.log("올바르지 않은 형식입니다.")
}