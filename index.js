const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/", require("./Routes"));

app.listen(port, () => console.log(`Server up: port=>${port}`));
