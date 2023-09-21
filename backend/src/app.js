import express from "express";
import morgan from "morgan"
import vehiculosRouter from "./routes/vehiculos.routes.js"
import cors from 'cors'


const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
})) ;

app.use(morgan("dev")) ;
app.use(express.json()) ;
app.use("/api",vehiculosRouter) ;

export default app;