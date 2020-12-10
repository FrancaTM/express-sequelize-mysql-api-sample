// other server
const db = require("./app/models");
const controller = require("./app/controllers/tutorial.controller");

const run = async () => {};

// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log("drop and re-sync db");
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
