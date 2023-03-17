
import {data} from './constant/data.js'
import News from './model/news-schema.js';

const DefaultData = async() => {
    try{
        await News.deleteMany({});
        await  News.insertMany(data);
        console.log('Data imported succesfully')
    }catch(error){
 
         console.log('Error',error);
     }
}

export default DefaultData