const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
//import routes
const authRoute = require("./routes/auth");

dotenv.config();

const mongoose = require("mongoose");

mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
  },
  () => console.log("connected to DB")
);
//Middlewares
// app.use(express.json())

//Route middlewares

app.use("/api/user", authRoute);

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

app.listen(3000, () => console.log("server is up and running on port 3000"));
