
import React from "react";
import reactDom from "react-dom";
import App from "./src/App"

reactDom.render(<App />, document.getElementById("root"));
// import express from "express";
// import cors from "cors";
// const app=express();
// app.use(cors());

// app.get("/getData",(req,res)=>{
//     res.send("Hello")
// });

//app.listen(5500,()=>console.log("app is running"));