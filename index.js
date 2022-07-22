const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/", require("./Routes"));

app.listen(3600, () => console.log(`Server up: port=>${3600}`));
