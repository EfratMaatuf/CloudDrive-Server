const express = require("express");
const router = express.Router();

const folderRoute = require("./folderRoute");
const fileRouter = require("./fileRoute");

router.use("/folders", folderRoute);
router.use("/files", fileRouter);

module.exports = router;
