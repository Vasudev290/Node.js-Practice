import jwt from 'jsonwebtoken'

let payload= {
    'name': 'Vasu',
    'password': '123445'
}

let token = jwt.sign(payload, "happyNew25")

console.log(token)    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVmFzdSIsInBhc3N3b3JkIjoiMTIzNDQ1IiwiaWF0IjoxNzM0OTMyNDM2fQ.jmzRQSNUXBisVC3LLin6Ln7J5Y1HWtDYDdOcaOLNxik\\\



let new_Payload = jwt.verify(token, "happyNew25")
console.log(new_Payload)