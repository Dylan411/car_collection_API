const {Schema, model} = require('mongoose');
var ObjectId = Schema.ObjectId
const carSchema = new Schema({
    _id: ObjectId,
    ToyNum: String,
    ColNum: Number,
    ModelName: String,
    Series: String,
    SeriesNum: String,
    Year: Number,
    Brand: String,
    Version: String,
    Img: String
});

module.exports = model('Car', carSchema);