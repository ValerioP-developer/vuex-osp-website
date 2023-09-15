const mongoose = require('mongoose');
const logger = require("../../utils/logger");
const connectDB = async () => {
    try{
        // mongodb connection string
        //const con = await mongoose.connect('mongodb://localhost:27017/pvl', {
        const con = await mongoose.connect('mongodb+srv://plvdevelopment:iosonountecnicoV9@clastervuejs.7piey8e.mongodb.net', {
              useNewUrlParser: true,
              useUnifiedTopology: true,
         //   useFindAndModify: false,
         //   useCreateIndex: true
        })
       // Log the successful checkout session
       logger.info(`Connected successfully to MongodDB :  ${con.connection.host}`
       );

    }catch(err){
        console.log(err);
                process.exit(1);
    }
}

module.exports = connectDB

