/**
 * 1970-01-01T00:00:00.00(UTC)
 */

let date = new Date();
console.log(typeof date);// object

date = new Date(0);

console.log(date);

console.log(1000 * 60 * 60 * 24);

date = new Date("May 16, 2024");
console.log(date); // 2024-05-15T15:00:00.000Z

date = new Date(2024, 4);
console.log(date); // 2024-04-30T15:00:00.000Z

date = new Date("Fri Sep 13 2024 21:19:34 GMT+0900");
console.log(date); //2024-09-13T12:19:34.000Z

let today = new Date;
today.getFullYear();
console.log(today); // 2024-09-13T12:27:46.294Z

today = new Date();
console.log(typeof today.toString()); //string