const  mongoose  = require('mongoose');
const uri = "mongodb+srv://DzTU3x5woUltMvLZ:DzTU3x5woUltMvLZ@cluster0.y9kte.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

async function createConnection(){
    const options = {useNewUrlParser: true , 
       // poolSize: 10, // Maintain up to 10 socket connections
        serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
        socketTimeoutMS: 45000, 
    }
    return await mongoose.connect(uri,options)
}

module.exports =    {
    createConnection: createConnection
};