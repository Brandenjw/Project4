const mongoose = require("../DB/connection");


const bodySchema = mongoose.Schema({
  //object that defines the type of values for each key
  Id: String,
  Name: String,
  Price: Number,
  Image: String,
  
  
});
//creating an API that will take the "Image" collection in mongodb
let BioCollection = mongoose.model("body", bodySchema);

// Fuction to get all bodies
function getAllBodies() {
    //using mongoose to get all Images
    return BodyCollection.find();
}

// Function to create new Body 
function createNewBody(newBodyData){
    return BodyCollection.create(newBodyData);
}

// Function to get Body by Id
function getBodyById(bodyId) {
    return BodyCollection.findById(bodyId);
}

// Function to update Body
function updateBodyById(bodyId, body) {
    return BodyCollection.findByIdAndUpdate({ _id: bodyId }, body);
    
}

// Function to delete Body by Id
function deleteBodyById(bodyId) {
    return BodyCollection.deleteOne({ _id: bodyId });
}



// calls all established functions to be exported
module.exports = {
    getAllBodies,
    createNewBody,
    getBodyById,
    updateBodyById,
    deleteBodyById,
   
};