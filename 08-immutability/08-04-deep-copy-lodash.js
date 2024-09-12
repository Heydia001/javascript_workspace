// npm i lodash

import _ from "lodash";

const user = {
    name: "김일남",
    address: {
        city: "부산"
    }
}

const newUser = _.cloneDeep(user);

newUser.name = "김이남";
newUser.address.city = "서울";
console.log(user);
console.log(newUser);