import express from "express";
import cors from "cors";
import PengaduanRoute from "./routes/PengaduanRoute.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(PengaduanRoute);

app.listen(5000, () => console.log('Server up and running ...'));