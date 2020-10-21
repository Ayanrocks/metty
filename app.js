const express = require("express"),
  app = express();

app.get("/", (req, res) => {
  res.json({ Status: "working" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started at ${PORT}`));
