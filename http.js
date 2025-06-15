const http = require('http')
const server = http.createServer((req,res)=>{
    //res.write('welcome to my page'),
    //res.end()
    if(req.url === '/'){
        res.end('welcome to our home page')
        return
    }
    if(req.url === '/about'){
        res.end('here is our page')
        return
    }
    res.end(`<h1>OOPS!</h1>
        <p>can't find the page</p>
        <a href = '/'>back to home page</a>`)
})
server.listen(5000)