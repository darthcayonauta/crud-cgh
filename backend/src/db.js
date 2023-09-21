import mongoose from "mongoose";

export const connectDb = async () =>{
    try {
        //conexion a mongodb ....
        await mongoose.connect("mongodb://localhost:27017/vehiculos");
        console.log("Base de datos conectada");

    } catch (error) {
        console.log(error) ;
        console.log("Error al conectar MongoDb");
    }
}