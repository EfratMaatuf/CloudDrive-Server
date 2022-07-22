const fs = require("fs");

const renameFile = (path, files) => {
  console.log("🚀 ~ file: fileLogic.js ~ line 4 ~ renameFile ~ files", files);
  console.log("🚀 ~ file: fileLogic.js ~ line 4 ~ renameFile ~ path", path);
  for (const file of files) {
    fs.rename(
      `${path}/${file.filename}`,
      `${path}/${file.originalname}`,
      (err) => {
        if (err) throw err;
        console.log("Rename complete!");
      }
    );
  }
};
const rename = (oldPath, newPath) => {
  if (!fs.existsSync(`./${oldPath}`))
    throw { message: "File " + oldPath + " is not exists" };
  fs.rename(`./${oldPath}`, `./${newPath}`, (err) => {
    if (err) throw err;
    console.log("Rename complete!");
  });
  return { message: "success" };
};
const create = (fileName) => {
  if (fs.existsSync(`root/${fileName}.txt`))
    throw { message: "File " + fileName + " already exists" };
  return fs.writeFileSync(`root/${fileName}.txt`, "");
};
const read = (fileName) => {
  if (!fs.existsSync(`root/${fileName}.txt`))
    throw { message: "File " + fileName + " is not exists" };
  return fs.readFileSync(`root/${fileName}.txt`, "utf8");
};
const update = (fileName, text) => {
  if (!fs.existsSync(`root/${fileName}.txt`))
    throw { message: "File " + fileName + " is not exists" };
  return fs.appendFileSync(`root/${fileName}.txt`, `\n${text}`);
};
const deleteFile = (filePath) => {
  if (!fs.existsSync(`./${filePath}`))
    throw { message: "File " + filePath + " is not exists" };
  fs.unlinkSync(`${filePath}`);
  return { message: "success" };
};
module.exports = { create, read, rename, update, deleteFile, renameFile };
