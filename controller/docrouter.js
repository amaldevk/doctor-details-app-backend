const express=require("express")
const docModel=require("../model/docmodel")
const router=express.Router()


router.post("/add",async(req,res)=>{
    let data=req.body
    let docs=new docModel(data)
    let result=await docs.save()
    res.json({status:"success"})
})

router.get("/view",async(req,res)=>{
    let data=await docModel.find()
    res.json(data)
})

module.exports=router