const { log } = require("console");
const express= require("express");
const app= express();
const port=3005;
const path=require("path")





app.use(express.static(path.join(__dirname,"public")))

//own middleware using arrow function
// const harryMiddleware = (req,res,next) =>{
//     console.log(req)
// }
// app.use(harryMiddleware);

//Giving parameters 
app.get("/hello/:name",(req,res)=>{
res.send("my name is" +req.params.name)
})

app.get("/about",(req,res)=>{
   res.send("iam getting response");
})

app.get("/",(req,res)=>{
    // res.sendFile(path.join(__dirname,"index.html"))
    // res.status(500)
    res.json({"name":"Aksha"})
   
});
app.listen(port,(req,res)=>{
    console.log("iam listening");
})