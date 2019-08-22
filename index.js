const express =require("express");
const app = express(); 
app.get("/about",(req,res)=>{
    res.send('Hello');
});
const port = 5000;

app.listen(port, (err, done)=>{
    if(err){
        console.log(err);
    }
console.log('Server started');
})



