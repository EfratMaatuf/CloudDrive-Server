const express = require("express");
const router = express.Router();
const folderLogic = require("../BL/folderLogic");

router.get("/folder", (req, res) => {
  try {
    res.send(folderLogic.returningFolder(req.query.folderPath));
  } catch (error) {
    res.status(error.code || 400).send({ message: error.message });
  }
});
router.post("/create", (req, res) => {
  try {
    res.send(folderLogic.create(req.query.folderPath));
  } catch (error) {
    res.status(error.code || 400).send({ message: error.message });
  }
});

// router.get("/read/:folderName", (req, res) => {
//   try {
//     res.send(folderLogic.read(req.params.folderName));
//   } catch (error) {
//     res.status(error.code || 400).send({ message: error.message });
//   }
// });
router.put("/rename", (req, res) => {
  try {
    console.log("rename folder");
    console.log(req.body);
    console.log(req.body.oldPath, req.body.newPath);
    res.send(folderLogic.rename(req.body.oldPath, req.body.newPath));
  } catch (error) {
    res.status(error.code || 400).send({ message: error.message });
  }
});
router.delete("/delete", (req, res) => {
  try {
    res.send(folderLogic.deleteFolder(req.query.folderPath));
  } catch (error) {
    res.status(error.code || 400).send({ message: error.message });
  }
});
module.exports = router;
