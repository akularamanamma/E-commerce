let express=require("express")
let bodyParser=require("body-parser")
// let connectDataBase = require("./db/connectdb.js")
let app=express()
let cors=require("cors")
let fs=require("fs")
require("dotenv").config();


app.use( bodyParser.json())
app.use( bodyParser.urlencoded({extended:true}))    
app.use(cors())

app.get("/getdata",(req,res)=>{
    fs.readFile(__dirname+"/"+"api.js","utf-8",function(err,data){
       res.send(data)
    })
})

app.get("/getdata/:id",(req,res)=>{
    fs.readFile(__dirname+"/"+"api.js","utf-8",function(err,data){
       let user=JSON.parse(data)
     let hello=user[req.params.id-1]
        res.send(JSON.stringify(hello))
      
    })
})
let startServer=async()=>{
    try{
        // await connectDataBase(process.env.PORT)
        app.listen(5000,(err,res)=>{
            if(err) throw err;
          console.log("server running at port:http://localhost:5000");
                 })
  
       
    } catch(err){    
        console.log(err);
    }
    }
    startServer()

  

