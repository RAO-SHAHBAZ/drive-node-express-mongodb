const express = require('express')
const app = express()
const userRouter = require('./routes/user.routes')
// this For Connecting Env FIle with Entire App
const dotenv = require('dotenv')
dotenv.config();

// connecting with MongoDb
const connectToDB = require('./config/db')
connectToDB();



app.set("view engine" , "ejs")

// midle ware for showing data in console
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use('/user',userRouter)

app.get('/',(req,res)=>{
    res.send("You Are On The Home Page")
})



app.listen(3000,()=>{
    console.log(
        "Server is Runing on Port 3000"
    ); 
})