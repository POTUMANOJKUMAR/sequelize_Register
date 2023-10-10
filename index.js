const express = require("express");
const app = express();
app.use(express.json());
const sequelize = require("./config/db"); 
const router=require("./router/router")

app.use("/api",router)
sequelize.sync()



app.listen(3000,(err)=>{
if(err)console.log(err)
else{
    console.log("server connected")
}
})