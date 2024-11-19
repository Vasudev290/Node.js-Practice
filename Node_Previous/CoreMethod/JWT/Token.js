const jwt = require("jsonwebtoken");
let user = {
    email: "aravind@gmail.com",
    password: "123456"
};
let payload = {
    id:user.email,
}
let secretKey = 'asdfghj';
let token = jwt.sign(payload, secretKey, {expiresIn: 60*60})
console.log(token);

//How to verify the token :-

jwt.verify(token, secretKey, (err, newpayload)=>{
    if (err) throw err;
    console.log(newpayload);
})