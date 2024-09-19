//? 14-18-Map.js
/**
 * 키-값 쌍을 저장하는 내장 객체
 * 중복 된 키는 허용 X
 * 객체와 달리 모든 유형의 값(원시의 값 또는 객체)을 키로 사용 할 수 있음.
 * 삽입된 순서대로 키-값 쌍을 저장, 
 * 순서가 보장되기 때문에 순회를 하거나 데이터를 정렬할 때 유용
 */

let map = new Map(); 
console.log(map); //Map(0) {}
map.set("name", "홍길동");
map.set("age", 99);
console.log(map); // Map(2) { 'name' => '홍길동', 'age' => 99 }

map.set({key: "value"}, "객체를 키로 넣었음")
console.log(map); 
// ^ Map(3) {'name' => '홍길동','age' => 99,{ key: 'value' } => '객체를 키로 넣었음' }

console.log(map.get('name')); // 홍길동
console.log(map.get({key: "value"})); // undefined

const obj = {key2: "vlaue2"};
map.set(obj, "객체를 키로 넣었음(식별자 사용)");
console.log(map.get(obj)); // 객체를 키로 넣었음(식별자 사용)

// 키의 존재여부 확인
console.log(map.has("age")); //true
console.log(map.has("address")); //false

// 키-값 삭제
map.delete("age");
console.log(map);

console.log(map.size); // 3

//? 순회
map.forEach((v, k) => console.log(v, k));
// ^ 홍길동 name
//   객체를 키로 넣었음 { key: 'value' }
//   객체를 키로 넣었음(식별자 사용) { key2: 'vlaue2' }

console.log(map.entries()); // 키-값을 반복가능한 Iterator 객체로 반환
// ^   [Map Entries] {
//     [ 'name', '홍길동' ],
//     [ { key: 'value' }, '객체를 키로 넣었음' ],
//     [ { key2: 'vlaue2' }, '객체를 키로 넣었음(식별자 사용)' ]
//     }

const studentMap = new Map();
studentMap.set("오삼남", 97);
studentMap.set("오사남", 99);
studentMap.set("오오남", 98);

console.log(studentMap);

console.log(studentMap.entries()); 
//[Map Entries] { [ '오삼남', 97 ], [ '오사남', 99 ], [ '오오남', 98 ] }

console.log([...studentMap.entries()].sort((a, b) => b[1] - a[1])); 
// [ [ '오사남', 99 ], [ '오오남', 98 ], [ '오삼남', 97 ] ]

console.log([...studentMap.entries()].sort((a, b) => a[1] - b[1])); 
// [ [ '오삼남', 97 ], [ '오오남', 98 ], [ '오사남', 99 ] ]

