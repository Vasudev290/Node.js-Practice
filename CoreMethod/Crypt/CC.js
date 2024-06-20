const bcrypt = require("bcryptjs")

let user_payment = {
    user_id: "VD123",
    CC_No: "555566667777",
    CVV_No: "7000",
};

let new_cc_no = bcrypt.hashSync(user_payment.CC_No, 10);

let new_cvv = bcrypt.hashSync(user_payment.CVV_No, 10)

let new_user_payment = {...user_payment, CC_No: new_cc_no, CVV_No: new_cvv};
console.log(new_user_payment);