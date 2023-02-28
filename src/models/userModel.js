const {Schema, model} = require('mongoose');
var ObjectId = Schema.ObjectId
const userSchema = new Schema({
    _id: ObjectId,
    userName: String,
    password: String,
    email: String,
    cars: [String]
});

module.exports = model('User', userSchema);