const express = require('express');
const app=express();
const bodyParser=require('body-parser');
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});


app.use(bodyParser.urlencoded({ extended: false }));

const PORT=process.env.PORT || 3000;
app.use(express.static('public'))


app.get("/",(req,res)=>{
res.sendFile(__dirname + '/index.html');
})

// app.get("/alok",(req,res)=>{
//   res.send({message:"this is alok's page"})
// })
app.get("/thanks",(req,res)=>{
res.send("Thanks");
})


app.post("/handle",(req,res)=>{
  res.redirect("/thanks");
})


// app.get(`/?`,(req,res)=>{
//   const name = req.query;
//   res.send()
// }

app.listen(PORT,()=>{
  console.log("server ")
})





