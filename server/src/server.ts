import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: "../config.env" });
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
