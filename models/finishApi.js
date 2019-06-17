const mongoose = require("../db/connection");



const finishSchema = mongoose.Schema({
    //object that defines the type of values for each key
    Image: String
    
    
  });
  //creating an API that will take the "Image" collection in mongodb
let finishCollection = mongoose.model("finish", finishSchema);

// Function to create new home
function createNewFinish(newFinishData){
    return FinishCollection.create(newFinishData);
}

// calls all established functions to be exported
module.exports = {
    
    createNewFinish,
   
   
};