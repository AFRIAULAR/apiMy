const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

app.get("/",  (req, res) => {
  let html = path.resolve(__dirname, './views/index.html');
  res.sendFile(html);
});

app.use("/", router);
app.listen(3000, () => console.log ("Servidor Corriendo")); 