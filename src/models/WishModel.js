const mongoose=require ('mongoose');
const DataSchema=mongoose.Schema({
        productID:{type:mongoose.Schema.ObjectId,required:true},
        userID:{type:mongoose.Schema.ObjectId,required:true}

    },
    {timestamps:true,versionKey:false}
)

const WishModel=mongoose.model('wishes',DataSchema)
module.exports=WishModel;