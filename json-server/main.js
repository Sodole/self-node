const fs = require("fs");
// fetch("http://localhost:3000/useok")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
const dbs = fs.readFileSync("./db.json", "utf8");
console.log(dbs);
