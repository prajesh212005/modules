const os = require("os");
const fs = require("fs");
const path=require('path');

const Filepath=path.join(__dirname,'log','system-info.txt');
// console.log("Type of os: " + os.type());
// console.log("Total memory: " + os.totalmem());
// console.log("Free memory: " + os.freemem());
// console.log("Architecture of cpu " + os.arch());

let data =
  "Type of os: " +
  os.type() +
  "\n" +
  "Total memory: " +
  os.totalmem() +
  "\n" +
  "Free memory: " +
  os.freemem() +
  "\n" +
  "Architecture of cpu " +
  os.arch();

fs.writeFile(Filepath, data, (err) =>{
  if (err) {
    throw err;
  }
});

fs.readFile(Filepath, (err, data) => {
    if (err) {
        if (err.code === "ENOENT") {
            console.error("File not found:", err.path);
        } else {
            console.error("Error reading file:", err);
        }
        return;
    }
    console.log("File content:" +data);
});

console.log("Filepath: "+Filepath);


// let obj={ dir: 'C:\Users\praje\OneDrive\Documents\Desktop\fullstack\practical3', base: 'system-info.txt' };
// console.log(path.format(obj));
