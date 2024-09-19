//? 14-20-JSON.js

/**
 * JSON(JavaScript Object Notation) : 자바스크립트 객체 표기법
 * 서버와 클라이언트 간의 데이터 전송에서 많이 활용
 */

/**
 * JSON.stringify(value[, replacer[, ])
 * 
 */

let obj = {
    name: "오일남",
    age: 90,
    address: "Busan"
}

let json = JSON.stringify(obj);

let jsonReplacer = JSON.stringify(obj, ["name", "age"]);
console.log(jsonReplacer); // {"name":"오일남","age":90}

let jsonrReplacerSpace = JSON.stringify(obj, Object.keys(obj), 2);
console.log(jsonrReplacerSpace);

/**
 * JSON.parse(text[, reviver]);
 */

let objParser = JSON.parse(jsonReplacer);
console.log("parse")
console.log(objParser); // { name: '오일남', age: 90 } -> type 는 Object

let objParserReviver = JSON.parse(jsonReplacer, (key, value) => {
    if(key === "age") return value + 1;
    return value;
});
console.log(`objParserReviver`)
console.log(objParserReviver); //{ name: '오일남', age: 91 }
