let http=require("http");
let server=http.createServer((req,res)=>{
    res.end("Hello Sanu");
});
const port=8000;
server.listen(port,()=>{
    console.log("server is listning");
})