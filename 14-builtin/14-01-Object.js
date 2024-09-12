// const person = {};
// console.log(typeof person)

const person = new Object();
person.lastName = "O";
person.firstName = "il-nam";
person.age = 99;
console.log(person)

person.getFullName = function () {
    console.log(this)
    return this.firstName + " " + this.lastName;
}

console.log(person.getFullName());