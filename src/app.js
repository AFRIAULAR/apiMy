const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(index.html);
});

app.use("/", router);
app.listen(3000, () => console.log ("Servidor Corriendo")); 
