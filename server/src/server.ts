import express from "express";
import bodyParser from "body-parser";
import { RegisterRoutes } from "../build/routes";

export const app = express();

// Use body parser to read sent json payloads
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(express.static('../../build'))  // React client bundle

RegisterRoutes(app);

const port = process.env.PORT || 8000;
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
