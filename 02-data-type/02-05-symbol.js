// 객체에서 사용하는 이름의 충돌 위험 없는 유일한 속성(property) 키

const obj = {}
obj["name"] = "김일남";
obj["age"] = "99";
// obj["name"] = "오일남";

let symbolName = Symbol("새로운 이름");
// console.log(typeof symbolName) // symbol

obj[symbolName] = "오일남";

console.log(obj)

console.log(obj[symbolName])

let objKeyArr = Object.keys(obj);
console.log(objKeyArr);

let symbolName2 = Symbol("새로운 이름");
obj[symbolName2] = "오일남";

console.log(obj)

console.log(symbolName === symbolName2)
