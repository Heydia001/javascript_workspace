let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2, 7, 8, 9, [10, 11, 12]);
console.log(arr3);

// 다차원 배열
arr1 = [[1], [2, 3]];
arr2 = [[4], [5, 6]];
arr3 = arr1.concat(arr2).flat();
console.log(arr3);