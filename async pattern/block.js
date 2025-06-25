const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Home page')
        res.end()
    }
    if(req.url === '/about'){
        for(let i = 0;i<1000;i++){
            for(let j = 0;j<1000;j++){
                console.log(`${i} ${j}`)
            }
        }
        res.write('About page')
        res.end()
    }
    res.end()
})
server.listen(5000,() => {
    console.log(' server Listening on port 5000....')
})                                      