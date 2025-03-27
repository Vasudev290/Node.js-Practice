const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vasukesavulu@gmail.com',
        pass: '12345'
    }
})

const options = {
    from : 'vasukesavulu@gmail.com',
    to : 'gchkumar999@gmail.com',
    subject: "Testing Mail",
    text: "Happy Journey..!🙏🙏✨ #Govindha #Gooooovindha"
}

transporter.sendMail(options, (err, data) => {
    if(err){
        console.log(err)
    }else{
        console.log("Email is sent Successfully..!" + data.response)
    }
})