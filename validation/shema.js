const joi=require("joi")


const user=joi.object({
    name:joi.string().max(15).min(2).required(),
    email:joi.string().email().required(),
    password:joi.string().required()
})
module.exports=user