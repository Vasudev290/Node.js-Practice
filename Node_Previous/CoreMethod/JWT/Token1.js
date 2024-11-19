const jwt = require('jsonwebtoken');
let user = {
    name: "Arjun",
    email: "arjun123@gmail.com",
    password: "k12345"
};
let secretKey = "123erty";

 let token = jwt.sign(user, "123erty", (err, token)=>{
    if (err) throw err;
    console.log(token);
 })

 /* jwt.verify(token, secretKey,(err, newpayload)=>{
    if (err) throw err;
    console.log(newpayload);
 }) */