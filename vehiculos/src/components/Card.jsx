import { useVehiculos } from "../context/VehiculosContext";
import { Link } from "react-router-dom";

function Card({vehiculo}){

    //uso funcion de eliminar ...
    const {deleteVehiculo} = useVehiculos() ;


    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md"> 
        <header className="flex justify-between">
            <h1 className="text-2xl font-bold">{vehiculo.marca} </h1>
            <div className="flex gap-x-2 items-center">
                <button 
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                onClick={ ()=>{
                    deleteVehiculo(vehiculo._id)
                } }    
                    >Delete</button>
                <Link 
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                  to={`/vehiculos/${vehiculo._id}`} 
                >
                    Editar
                </Link>
              
            </div>
        </header>
        <p className="text-slate-300"> {vehiculo.modelo} </p>
        <p>{vehiculo.year}</p>
  </div>
    )
}

export default Card ;