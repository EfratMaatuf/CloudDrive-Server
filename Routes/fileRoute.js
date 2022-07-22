const express = require("express");
const router = express.Router();
const fileLogic = require("../BL/fileLogic");

const multer = require("multer");

const middleware = (req, res, next) => {
  console.log("🚀path= " + req.query.path);
  const upload = multer({ dest: `${req.query.path}/` });
  const cpUpload = upload.fields([{ name: "file" }]);
  cpUpload(req, res, next);
};

router.post("/addFile", middleware, (req, res) => {
  try {
    console.log("🚀go to logic");
    console.log("req.query.path: ", req.query.path);
    console.log("req.files[file]: ", req.files);
    fileLogic.renameFile(req.query.path, req.files["file"]);
    res.send("SUCCESS");
  } catch (error) {
    res.status(error.code || 400).send({ message: error.message });
  }
});
router.post("/create/:fileName", (req, res) => {
  try {
    res.send(fileLogic.create(req.params.fileName));
  } catch (error) {
    res.status(error.code || 400).send({ message: error.message });
  }
});
router.get("/read/:fileName", (req, res) => {
  try {
    res.send(fileLogic.read(req.params.fileName));
  } catch (error) {
    res.status(error.code || 400).send({ message: error.message });
  }
});
router.put("/update/:fileName", (req, res) => {
  try {
    res.send(fileLogic.update(req.params.fileName, req.body.text));
  } catch (error) {
    res.status(error.code || 400).send({ message: error.message });
  }
});
router.put("/rename", (req, res) => {
  try {
    res.send(fileLogic.rename(req.body.oldPath, req.body.newPath));
  } catch (error) {
    res.status(error.code || 400).send({ message: error.message });
  }
});
router.delete("/delete", (req, res) => {
  try {
    res.send(fileLogic.deleteFile(req.query.folderPath));
  } catch (error) {
    res.status(error.code || 400).send({ message: error.message });
  }
});
module.exports = router;
