//? 15-01-default-parameter.js

function sum(x, y = 0) {
    console.log(x + y);
    // return x + y;
}

sum(1); // NaN