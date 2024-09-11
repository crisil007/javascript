// const express=require('express')
// const app=express();
// const cors=require('cors')
// const dotenv=require('dotenv')
// dotenv.config();
// app.use(cors("../client"));
// app.listen(process.env.PORT,()=>{
// console.log(`system running at http://localhost:${process.env.PORT}`);

// })
const express = require('express');
const app = express();
const mongoose=require("mongoose")
const dotenv=require('dotenv')
dotenv.config();


app.use(express.static("../client"));  
app.use(express.json());
app.use(express.urlencoded({extended:true}))

async function mongoConnect(){
  try{
    await mongoose.connect(process.env.MONGOD_URI)
console.log("dtabase connection established")
  }
  catch{(error)

  }
}
mongoConnect()
 app.post('/users', (req, res) => {

 });

app.listen(process.env.PORT,()=>{
     console.log(`system running at http://localhost:${process.env.PORT}`);
    
    })