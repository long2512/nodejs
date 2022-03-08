const express = require('express');
const cors = require('cors');
const app = express();

app.get('/', (req, res) =>{
    res.send("<h1>Home Page</h1>")
})

app.get('/api/products', (req, res) =>{
    const data = [
        {id: 1, name: "Products A"},
        {id: 2, name: "Products B"}
    ];
    res.json(data);
})

app.get('/', (req, res) =>{
   
})

// const http =  require('http');
// const server = http.createServer((req, res) =>{
//     const url = req.url;
//     console.log(req);
//     console.log(url);
//     if(url === "/api/products"){
//         const data = [
//             {id: 1, name: "Products A"},
//             {id: 2, name: "Products b"}
//         ];
//         res.end(JSON.stringify(data))
//     } else if( url ==="/api/posts"){
//         console.log("API Post");
//     } else {
//         res.setHeader("Content-Type","text/html");
//         res.write("<html><body><h1>Home Page</h1></body></html>");
//         res.end();
//     }
// })
const PORT = 3001;
app.listen(PORT, ()=>{
    console.log("Server đang chạy cổng ", PORT);
});