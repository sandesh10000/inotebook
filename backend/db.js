const mongoose= require ('mongoose');
const mongoURI="mongodb+srv://sandesh:sandesh@cluster0.ogkokpj.mongodb.net/?retryWrites=true&w=majority"
// mongodb://127.0.0.1:27017
const connectToMongo=async()=>{
    try {
        await mongoose.connect(mongoURI) 
        console.log('connected to Mongo successfuly')
    }
    catch(error) {
        console.log(error)
    }
}

module.exports=connectToMongo;