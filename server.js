// other server
const db = require("./app/models");
const controller = require("./app/controllers/tutorial.controller");

const run = async () => {
  // create tutorials
  const tut1 = await controller.createTutorial({
    title: "Tut1",
    description: "Tut1 desc",
  });

  const tut2 = await controller.createTutorial({
    title: "Tut#2",
    description: "Tut#2 Description",
  });

  // add comments
  const comment1 = await controller.createComment(tut1.id, {
    name: "comment 1 sample",
    text: "just some random text",
  });

  await controller.createComment(tut1.id, {
    name: "zkoder",
    text: "One of the best tuts!",
  });

  const comment2 = await controller.createComment(tut2.id, {
    name: "aKoder",
    text: "Hi, thank you!",
  });

  await controller.createComment(tut2.id, {
    name: "anotherKoder",
    text: "Awesome tut!",
  });

  // Get Tutorial by given id
  const tut1Data = await controller.findTutorialById(tut1.id);
  console.log(
    ">> Tutorial id= " + tut1Data.id,
    JSON.stringify(tut1Data, null, 2)
  );

  const tut2Data = await controller.findTutorialById(tut2.id);
  console.log(
    ">> Tutorial id=" + tut2Data.id,
    JSON.stringify(tut2Data, null, 2)
  );

  // Get Comment by given id
  const comment1Data = await controller.findCommentById(comment1.id);
  console.log(
    ">> Comment id= " + comment1.id,
    JSON.stringify(comment1Data, null, 2)
  );

  const comment2Data = await controller.findCommentById(comment2.id);
  console.log(
    ">> Comment id=" + comment2.id,
    JSON.stringify(comment2Data, null, 2)
  );

  // Get all Tutorials
  const tutorials = await controller.findAll();
  console.log(">> All tutorials", JSON.stringify(tutorials, null, 2));
};

// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log("drop and re-sync db");
  run();
});

// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081",
// };

// app.use(cors(corsOptions));

// // parse requests of content-type - application/json
// app.use(bodyParser.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// const db = require("./app/models");
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("drop and re-sync db");
// });

// // simple route
// app.get("/", (req, res) => {
//   res.json({ message: "welcome to francaTM application" });
// });

// require("./app/routes/tutorial.routes")(app);

// // set port, listen for requests
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`server is running on port ${PORT}`);
// });
