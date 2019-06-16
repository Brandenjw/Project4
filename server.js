const express = require("express");
const app = express();
// const logger = require('morgan');

//calling all established functions in respective APIs
const bodyApi = require("./models/bodyApi.js");
const colorApi = require("./models/colorApi.js");
const wheelsApi = require('./models/wheelsApi.js')
const unirest = require('unirest');
const axios = require('axios');


// app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Linking CSS
app.use("/public", express.static("public"));
app.use(express.static(`${__dirname}/client/build`));

//  BODY MODEL
//////////////

app.get("/api/weather", (req, res) => {
  axios.get("https://community-open-weather-map.p.rapidapi.com/weather?id=2172797&units=%22metric%22+or+%22imperial%22&mode=json%2C+html&q=Atlanta,USA",
  {headers: {
    "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.PROJECT_4_API_KEY
  }}).then(result => {
    res.send(result.data)
  })
})


app.get("/api/body/", (req, res) => {
  bodyApi.getAllBodies()
  .then(body => {
    res.send(body);
  });
});

app.get("/api/body/:bodyId", (req, res) => {
  bodyApi.getAllBodies()
  .then(body => {
    res.send(body);
  });
});

// // Posting a new body
app.post("/api/body", (req, res) => {
  bodyApi.createNewBodies(req.body).then(body => {
    res.send(body);
  });
});

// Updating an body
app.put("/api/body/:bodyId", (req, res) => {
  // updateBioById
  bodyApi
    .updateBodyById(req.params.bodyId, req.body, { new: true })
    .then(bio => {
      res.send(bio);
    });
});
// // Deleting a body
app.delete("/api/body/:bodyId", (req, res) => {
  bodyApi.deleteBodyById(req.params.bodyId).then(() => {
    res.send(200);
  });
});

// COLOR MODEL//
///////////////////////

app.get("/api/color/:colorId", (req, res) => {
  colorApi.getAllColors().then(color => {
    res.send(color);
  });
});

// Posting a new COLOR (img)
app.post("/api/color", (req, res) => {
  colorApi.createNewColor(req.body).then(color => {
    res.send(color);
  });
});

// Deleting a COLOR Image
app.delete("/api/color/:colorId", (req, res) => {
  colorApi.deleteColorById(req.params.colorId).then(() => {
    res.send(200);
  });
});

// WHEEL MODEL//
/////////////////////////

app.get("/api/wheel/:wheelId", (req, res) => {
  wheelsApi.getAllWheels().then(wheel => {
    res.send(wheel);
  });
});

// Posting a new Wheel (img)
app.post("/api/wheel", (req, res) => {
  wheelsApi.createNewWheel(req.body).then(wheel => {
    res.send(wheel);
  });
});

// Deleting a Wheel Image
app.delete("/api/wheel/:wheelId", (req, res) => {
  wheelsApi.deleteWheelById(req.params.wheelId).then(() => {
    res.send(200);
  });
});

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
});
