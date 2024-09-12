const user = {
    name: "김일남",
    address: {
        city: "부산"
    }
}

// const newUser = Object.assign({}, user); // shallow-copy
// console.log(user === newUser)

// newUser.name = "김이남";
// newUser.address.city = "서울";

// console.log(user);
// console.log(newUser);
// console.log(user.address === newUser.address); // true

const newUser = {...user};
console.log(user === newUser)

newUser.name = "김이남";
newUser.address.city = "서울";

console.log(user);
console.log(newUser);
console.log(user.address === newUser.address); // true


