const mongoose = require("../DB/connection");


const colorSchema = mongoose.Schema({
  //object that defines the type of values for each key
  Id: String,
  Color: String,
  Price: Number
  
  
});
//creating an API that will take the "Image" collection in mongodb
let ColorCollection = mongoose.model("color", colorSchema);

// Fuction to get all bodies
function getAllColor() {
    //using mongoose to get all Images
    return ColorCollection.find();
}

// Function to create new Body 
function createNewColor(newColorData){
    return ColorCollection.create(newColorData);
}

// Function to get Body by Id
function getColorById(colorId) {
    return ColorCollection.findById(colorId);
}

// Function to update Body
function updateColorById(colorId, color) {
    return ColorCollection.findByIdAndUpdate({ _id: colorId }, color);
    
}

// Function to delete Body by Id
function deleteColorById(colorId) {
    return ColorCollection.deleteOne({ _id: colorId });
}



// calls all established functions to be exported
module.exports = {
    getAllColor,
    createNewColor,
    getColorById,
    updateColorById,
    deleteColorById,
   
};