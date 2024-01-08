import express from "express"
import certsRouter from "./routes/certs.js"

const port = 5000;
const app = express();
//app.use(express.json());

app.use("/api", certsRouter);

app.listen(port, () => {
    console.log("Listening on port " + port);
})