const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("nuova applicazione");
});

app.get("/about", (req, res) => {
  res.send("ciao");
});

app.listen(port, () => {
  console.log(`Server avviato su porta ${port}`);
});
