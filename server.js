var parser = require("ua-parser-js");

const express = require("express");
const app = express();

app.get("/ua-parser", function (req, res) {
  try {
    console.log(`/ua-parser`, new Date().toLocaleDateString());
    var ua = parser(req.headers["user-agent"]);
    return res.json({ data: ua });
  } catch (e) {
    return res.json({ error: "Internal Server Error" });
  }
});

app.listen(3000, (_) => {
  // This is a comment
  console.log("Server running at Port: 8000");
});
