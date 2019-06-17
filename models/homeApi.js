const mongoose = require("../db/connection");



const homeSchema = mongoose.Schema({
    //object that defines the type of values for each key
    Image: String
    
    
  });
  //creating an API that will take the "Image" collection in mongodb
let homeCollection = mongoose.model("home", homeSchema);

// Function to create new home
function createNewHome(newHomeData){
    return HomeCollection.create(newHomeData);
}

// calls all established functions to be exported
module.exports = {
    
    createNewHome,
   
   
};