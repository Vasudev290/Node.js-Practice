import bcrypt from 'bcrypt'


const user = {
    'email': 'vasu@gmail.com',
    'cc': 1234567899876534,
    'cvv': 234
}

let salt = bcrypt.genSaltSync(10);
let new_cc = bcrypt.hashSync(user.cc.toString(), salt)
console.log("Original CC :", user.cc)
console.log("Hashed CC:", new_cc)