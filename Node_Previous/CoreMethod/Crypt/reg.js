const bcrypt = require("bcryptjs")
let userDetails ={
    name: "Arjun",
    email: "arjun@gmail.com",
    password: "arjun123"
};

let newPassword = bcrypt.hashSync(userDetails.password, 10);
console.log(newPassword);

userDetails = {...userDetails, password: newPassword};
console.log(userDetails);

let x =  (bcrypt.compareSync("arjun1234", userDetails.password))
console.log(x);

if (bcrypt.compareSync("arjun1234", userDetails.password)) {
    console.log("Password - Matched");
} else {
    console.log("Password - Not matched");
}