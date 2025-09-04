import express from "express";
import dotenv, { configDotenv } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import inventoryRoutes from "./routes/inventories.route.js";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import invoiceRoutes from "./routes/invoice.route.js";
import statisticRoutes from "./routes/invoice.route.js";

// load .env
dotenv.config();

// load express
const app = express();

// port
const PORT = process.env.PORT || 5000;

// middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/inventories", inventoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/invoice", invoiceRoutes);
app.use("/api/statistic", statisticRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})