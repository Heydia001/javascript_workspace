const user = {
    name: "김일남",
    address: {
        city: "부산"
    }
}

const newUser = user;
console.log(user === newUser)

newUser.name = "김이남";

console.log(user)
console.log(newUser)