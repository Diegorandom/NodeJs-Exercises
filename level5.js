const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let namesArray = [];

app.get("/", (req, res) => {
  var foundName = namesArray.filter((word) => {
    var pattern = new RegExp(req.body.name, "g");
    if (word.match(pattern)) {
      return true;
    } else {
      return false;
    }
  });
  res.send(JSON.stringify(foundName));
});

app.post("/", (req, res) => {
  namesArray.push(req.body.name);
  res.send(namesArray);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
