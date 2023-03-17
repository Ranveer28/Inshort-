
import mongoose from "mongoose";


const Connection = async(username,password)=>{
    const URL =`mongodb://${username}:${password}@ac-essmp6t-shard-00-00.8gydlyc.mongodb.net:27017,ac-essmp6t-shard-00-01.8gydlyc.mongodb.net:27017,ac-essmp6t-shard-00-02.8gydlyc.mongodb.net:27017/?ssl=true&replicaSet=atlas-6mihgn-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{
       await mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology: true })

       console.log('Database connected successfully')
    }catch(error){

        console.log('Error While connecting with the database',error);
    }
    
}

export default Connection;