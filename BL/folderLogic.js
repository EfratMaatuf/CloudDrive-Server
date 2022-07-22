const { log } = require("console");
const fs = require("fs");

const returningFolder = (folderPath) => {
  console.log(folderPath);
  return fs.readdirSync(folderPath);
  // fs.readdirSync(folderPath).forEach(function (file) {
  //   console.log(file);
  // });
};
const create = (folderPath) => {
  if (fs.existsSync(`./${folderPath}`))
    throw { message: "Folder " + folderPath + " already exists" };
  fs.mkdirSync(`./${folderPath}`);
  return { message: "success" };
};
const rename = (oldPath, newPath) => {
  if (!fs.existsSync(`./${oldPath}`))
    throw { message: "Folder " + oldPath + " is not exists" };
  fs.rename(`./${oldPath}`, `./${newPath}`, (err) => {
    if (err) throw err;
    console.log("Rename complete!");
  });
  return { message: "success" };
};
// const read = (folderName) => {
//   if (!fs.existsSync(`root/${folderName}.txt`))
//     throw { message: "Folder " + folderName + "is not exists" };
//   return fs.readFileSync(`root/${folderName}.txt`, "utf8");
// };
// const update = (folderName, text) => {
//   if (!fs.existsSync(`root/${folderName}.txt`))
//     throw { message: "Folder " + folderName + "is not exists" };
//   return fs.appendFileSync(`root/${folderName}.txt`, `\n${text}`);
// };
const deleteFolder = (folderPath) => {
  if (!fs.existsSync(`./${folderPath}`))
    throw { message: "Folder " + folderPath + " is not exists" };
  if (fs.readdirSync(folderPath).length === 0) {
    fs.rmdir(`./${folderPath}`, (err) => {
      if (err) throw err;
      console.log("DeleteFolder complete!");
    });
  } else {
    throw { message: "Folder " + folderPath + " is not empty" };
  }
  return { message: "success" };
};
module.exports = { create, rename, deleteFolder, returningFolder };
// , read, update
