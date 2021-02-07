const express = require("express");
const bodyParser = require("body-parser");
const routing = require("./Routers/user");
const app = express();
app.use(bodyParser.json());
app.use("/", routing);

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("listen on port: ", port);
});
