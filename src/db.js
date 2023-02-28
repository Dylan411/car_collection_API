require('dotenv').config()
const mongosee = require('mongoose');
const dbConnection = async() => {
    try {
        console.log('Conecting.....');
        mongosee.set("strictQuery", false);
        mongosee.set('debug', true);
        mongosee.connect(process.env.MONGODB,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
        console.log('connected');
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {dbConnection}