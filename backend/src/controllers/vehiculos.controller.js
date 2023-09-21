//acciones y funciones del crud de db
import Vehiculo from '../models/vehiculos.model.js' ;

//1. crear vehiculo

export const crearVehiculo = async (req,res) => {
    try {
        //capturo los valores desde req.body
        const {marca,modelo,year} = req.body;

        //creo el objeto para el nuevo vehiculo
        const newVehiculo = new Vehiculo({
            marca,
            modelo,
            year
        });

        //salvo la data
        const savedVehiculo = await newVehiculo.save();

        //devuelvo data
        res.json(savedVehiculo) ;


    } catch (error) {
        console.log(error) ;
    }
}


//2. listar vehiculos 
export const getVehiculos =  async (req,res)=>{
    //listamos todos los vehiculos
    const vehiculos = await Vehiculo.find() ;

    res.json(vehiculos) ;
}

//listar vehiculo con id específico
export const getVehiculo = async (req,res) =>{
    const vehiculo = await Vehiculo.findById(req.params.id) ;

    //si no encuentra vehiculo / data 
    if(!vehiculo) return res.status(404).json({message:"vehiculo no encontrado"});

    res.json(vehiculo) ;
}

//eliminar vehiculo
export const deleteVehiculo = async (req,res) => {

    console.log(req.params.id) ;
    const vehiculo = await Vehiculo.findByIdAndDelete(req.params.id) ;

    try {
        //si no encuentra vehiculo ...
        if( !vehiculo ) return res.status(404).json({message:"Vehiculo no encontrado"});

        //en caso contrario
        res.sendStatus(204) 
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
}

//actualizar vehiculo
export const updateVehiculo = async (req,res) => {
    try {
        const vehiculo = await Vehiculo.findByIdAndUpdate(req.params.id,
            req.body,{
            new : true
        });

        //si no encuentra vehiculo
        if (!vehiculo) res.status(404).json({message:'vehiculo no encontrado'})
        //de lo contrario ...
        res.json(vehiculo) ;


    } catch (error) {
       console.log(error) 
       return res.status(500).json({message:'algo malo pasa con actualizar'})
    }
}