const mongoose = require("../DB/connection");


const eventSchema = mongoose.Schema({
    event: String,
    Date: String

});