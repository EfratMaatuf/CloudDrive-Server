const express = require("express");
const router = express.Router();
const fileLogic = require("../BL/fileLogic");

const multer = require("multer");

const middleware = (req, res, next) => {
  const upload = multer({ dest: `${req.query.path}/` });
  const cpUpload = upload.fields([{ name: "file" }]);
  cpUpload(req, res, next);
};
router.get("/a", (req, res) => {
  // res.sendFile("./BL/fileLogic.js");
  res.sendFile(__dirname + "/index.js");
});
router.get("/fileDetails", (req, res) => {
  try {
    console.log(req.query.filePath);
    res.send(fileLogic.fileDetails(req.query.filePath));
  } catch (error) {
    res.status(error.code || 400).send({ message: error.message });
  }
});
router.post("/addFile", middleware, (req, res) => {
  try {
    fileLogic.renameFile(req.query.path, req.files["file"]);
    res.send({ message: "success" });
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
router.get("/download", (req, res) => {
  try {
    // res.send("aaa");

    console.log(
      "🚀 ~ file: fileRoute.js ~ line 73 ~ router.get ~ download",
      req.query.filePath
    );
    res.download(req.query.filePath, (err) => {
      if (err) {
        console.log(err);
      }
    });
    // res.send(fileLogic.download(req.query.filePath));
  } catch (error) {
    res.status(error.code || 400).send({ message: error.message });
  }
});

module.exports = router;
