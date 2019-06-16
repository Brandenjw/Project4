const mongoose = require("../db/connection");


const colorSchema = mongoose.Schema({
  //object that defines the type of values for each key
  Id: String,
  Color: String,
  Price: Number
  
  
});
//creating an API that will take the "Image" collection in mongodb
let ColorCollection = mongoose.model("color", colorSchema);

// Fuction to get all colors
function getAllColors() {
    //using mongoose to get all 
    return ColorCollection.find();
}

// Function to create new color 
function createNewColor(newColorData){
    return ColorCollection.create(newColorData);
}

// Function to get color by Id
function getColorById(colorId) {
    return ColorCollection.findById(colorId);
}

// Function to update color
function updateColorById(colorId, color) {
    return ColorCollection.findByIdAndUpdate({ _id: colorId }, color);
    
}

// Function to delete Body by Id
function deleteColorById(colorId) {
    return ColorCollection.deleteOne({ _id: colorId });
}



// calls all established functions to be exported
module.exports = {
    getAllColors,
    createNewColor,
    getColorById,
    updateColorById,
    deleteColorById,
   
};