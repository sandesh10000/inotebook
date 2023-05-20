const mongoose= require ('mongoose');
const mongoURI="mongodb+srv://sandesh:sandesh@cluster0.ogkokpj.mongodb.net/iNotebook?retryWrites=true&w=majority"

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