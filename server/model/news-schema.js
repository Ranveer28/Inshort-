import mongoose from "mongoose";


const newSchema = new mongoose.Schema({


    title:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    url:{
        type:String,
        require:true,
        unique: true

    },
    timestamp:{
        type:String,
        require:true
    },publishr:{
        type:String,
        require:true
    },

});

const news = mongoose.model('new',newSchema)

 export default news;
   