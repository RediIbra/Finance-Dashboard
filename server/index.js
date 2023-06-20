import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import KPI from "./models/KPI.js";
import { kpis, products } from "./data/data.js";
import productRoutes from "./routes/products.js";
import Product from "./models/Products.js";

const app = express();
dotenv.configDotenv();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/kpi", kpiRoutes);

app.use("/product", productRoutes);
const PORT = process.env.PORT || 9000;
mongoose
  .connect(
    "mongodb+srv://redi:1234@cluster0.tqthdv4.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port:${PORT}`));
    // await mongoose.connection.db.dropDatabase();
    // KPI.insertMany(kpis);
    // Product.insertMany(products);
  })
  .catch((err) => console.log(`${err} did not connect`));
