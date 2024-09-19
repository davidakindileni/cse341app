const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("David Akindileni");
});

const port = 3000;

app.listen(process.env.port || port);
console.log("App is listening at port " + (process.env.port || port));
