const express = require("express");
const app = express();
const PORT = process.env.PORT || 443;
const path = require("path");
app.use(express.static(path.resolve(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});
// app.get("/feed/*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "public/index.html"));
// });

app.listen(PORT, () => console.log(`Running at http://localhost:${PORT}`));
