function calculateArea(width, height) {
    let area = width * height;
    return area;
}
// console.log(calculateArea(3, 5));

function getSize(width, height, depth) {
    let area = width * height;
    let volume = width * height * depth;
    return [area, volume]; // ! 단 하나의 값만 반환
    console.log(area, volume) // ! 실행 안됨
}
// console.log(getSize(2, 2, 2));
const [area, volume] = getSize(2, 2, 2);
// console.log(area, volume)

