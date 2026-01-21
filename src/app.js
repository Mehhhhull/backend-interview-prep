import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app=express()


app.use(cors({
  origin:process.nextTick.CORS_ORIGIN,
  credentials:true
}))
app.use(express.json({limit:'10kb'}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import
import userRouter from "./routes/user.routes.js"

//routes declaration
app.use("/api/v1/users",userRouter)

//http://localhost:8000/api/v1/users/register

//app.use(cors())  is used while using middleware or while doing a config setting

export default app;

