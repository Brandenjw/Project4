const express = require("express");
const app = express();
// const logger = require('morgan');

//calling all established functions in respective APIs
const bodyApi = require("./models/bodyApi.js");
// const colorApi = require("./models/colorApi.js");
// const wheelApi = require('./models/wheelApi.js')

// app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Linking CSS
app.use("/public", express.static("public"));
app.use(express.static(`${__dirname}/client/build`));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

//homepage rendering
app.get("/", (req, res) => {
  res.send("Hello world!");
});

//  BODY MODEL
//////////////

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

app.get("/color", (req, res) => {
  colorApi.getAllColors().then(color => {
    res.send(color);
  });
});

// Posting a new COLOR (img)
app.post("/color", (req, res) => {
  colorApi.createNewColor(req.body).then(color => {
    res.send(Color);
  });
});

// Deleting a COLOR Image
app.delete("/color/:colorId", (req, res) => {
  colorApi.deleteColorById(req.params.colorId).then(() => {
    res.send(200);
  });
});

// WHEEL MODEL//
/////////////////////////

app.get("/wheel", (req, res) => {
  wheelApi.getAllWheels().then(wheel => {
    res.send(wheel);
  });
});

// Posting a new Wheel (img)
app.post("/wheel", (req, res) => {
  wheelApi.createNewWheel(req.body).then(wheel => {
    res.send(wheel);
  });
});

// Deleting a Wheel Image
app.delete("/wheel/:wheelId", (req, res) => {
  wheelApi.deleteWheelById(req.params.wheelId).then(() => {
    res.send(200);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
});
