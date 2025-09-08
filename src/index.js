import express from "express";
import * as mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import router from "./routes/index.js";
import { ErrorHandlingMiddleware } from "./middlewares/ErrorHandlingMiddleware.js";
import { swaggerDocs, swaggerUi } from "./swagger.js";

const port = process.env.PORT;

const app = express();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@techmagicproj.ovju8zo.mongodb.net/`,
  )
  .then(() => console.log("connected"));

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(ErrorHandlingMiddleware);
// const start = async () => {
//   const user = await Driver.create({
//     surname: "Route1",
//     name: "Route1",
//     patronymic: "Route1",
//     experience: 100,
//   });
//   console.log(user);
// };
// start();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
