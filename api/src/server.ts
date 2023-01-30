import express from "express";
import path from "path";

const app = express();

const port = 9000;

const appDir = path.join("..", "app", "dist");
app.use(express.static(appDir));

app.get("/api", (req, res) => {
  console.log("api");
  res.send("Hello World from api!!!");
});

app.get("/", (req, res) => {
  console.log("get html");
  res.sendFile(path.join(appDir, "index.html"));
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
