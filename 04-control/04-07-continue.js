let string = "Hello World!";
let count = 0;

for (let i = 0; i < string.length; i++) {
    if (string[i] !== "o") {
        continue;
    }
    count++;
}

console.log(count);