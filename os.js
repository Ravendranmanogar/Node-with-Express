const os = require('os')
const user = os.userInfo()
console.log(user)
console.log(`this uptime ${os.uptime()}`)

const currentos = { 
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentos)