import express from "express";
import "dotenv/config";
import Router from "./routes/routes.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("/api", ...Router());

app.listen(PORT, () => {
  console.log("server ishga tushdi:", PORT);
});
