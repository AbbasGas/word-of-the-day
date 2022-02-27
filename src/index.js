import express from "express";
import bodyParser from "body-parser";

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(bodyParser.json());

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
