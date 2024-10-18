const mongoose=require ('mongoose');
const DataSchema=mongoose.Schema({

        title:{type:String,required:true},
        des:{type:String,required:true},
        price:{type:Boolean,required:true},
        image:{type:String,required:true},

        ProductID:{type:mongoose.Schema.ObjectId,required:true}
    },
    {timestamps:true,versionKey:false}
)

const ProductSliderModel=mongoose.model('productsliders',DataSchema)

module.exports=ProductSliderModel;