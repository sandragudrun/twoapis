const express= require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());

const port = 3000;

app.get("/",(req,res)=>{
    res.send("hello world")
});

app.listen(port,()=>{
    console.log("listening to port", port)
});

