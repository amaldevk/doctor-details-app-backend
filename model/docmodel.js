const mongoose=require("mongoose")

const docScheme=new mongoose.Schema(
    {
        docName:String,
        docQualification:String,
        docIdProofNumber:String,
        docSpecialisation:String,
        docYearOfExp:String
    }
)

module.exports=mongoose.model("docs",docScheme)