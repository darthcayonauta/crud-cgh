/**
 * el vehiculo tendrá marca, modelo y año
 */
import mongoose from "mongoose";

const vehiculoSchema = new mongoose.Schema({
    marca: {
        type : String,
        required : true
    },
    modelo: {
        type : String,
        required : true
    },
    year: {
        type : String,
        required : true
    },
}, {timestamps: true}) ;

export default mongoose.model('Vehiculo',vehiculoSchema) ;