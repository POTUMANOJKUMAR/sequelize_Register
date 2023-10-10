const express=require("express")
const router=express.Router()
const {signUp,login}=require("../Controller/register")

const validation=require("../validation/validation")


router.post("/create",signUp)
router.post("/login",validation,login)

module.exports=router