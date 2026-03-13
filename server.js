const express = require("express");
const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/login", (req, res) => {
  const name = req.body.name;
  res.send(`<h1>Hello ${name}</h1>`);
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
