const mongoose = require("../db/connection");


const wheelSchema = mongoose.Schema({
  //object that defines the type of values for each key
  Name: String,
  Description: String,
  Price: Number,
  Image: String
  
  
});
//creating an API that will take the "Image" collection in mongodb
let WheelCollection = mongoose.model("wheel", wheelSchema);

// Fuction to get all bodies
function getAllWheels() {
    //using mongoose to get all Images
    return WheelCollection.find();
}

// Function to create new Wheel 
function createNewWheel(newWheelData){
    return WheelCollection.create(newWheelData);
}

// Function to get Wheel by Id
function getWheelById(wheelId) {
    return wheelCollection.findById(bodyId);
}

// Function to update Wheel
function updateWheelById(wheelId, wheel) {
    return WheelCollection.findByIdAndUpdate({ _id: wheelId }, wheel);
    
}

// Function to delete wheel by Id
function deleteWheelById(wheelId) {
    return WheelCollection.deleteOne({ _id: wheelId });
}



// calls all established functions to be exported
module.exports = {
    getAllWheels,
    createNewWheel,
    getWheelById,
    updateWheelById,
    deleteWheelById,
   
};