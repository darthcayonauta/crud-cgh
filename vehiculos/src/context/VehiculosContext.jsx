import { createContext,useContext,useState } from "react";
//uso la api de conexion ...
import { createVehiculoRequest, deleteVehiculoRequest, getVehiculoRequest, getVehiculosRequest, updateVehiculoRequest } from "../api/vehiculos";

const VehiculosContext = createContext() ;

export const useVehiculos = () =>{
    const context = useContext(VehiculosContext) ;

    if( !context) {
        throw new Error("useVehiculos debe ser usado dentro de un VehiculoProvider")
    }

    return context ;
}

export function VehiculoProvider({children}){
    //hooks
    const [vehiculos, setVehiculos] = useState([]) ;
    //listo los vehiculos

    const getVehiculos = async () => {
        const res = await getVehiculosRequest() ;
        setVehiculos(res.data) ;
        console.log(res);
    }

    const getVehiculo = async (id) => {
        try {
            const res = await getVehiculoRequest(id) ;
            return res.data ;
        } catch (error) {
            console.log(error);
        }
    }

    //elimino un vehiculo
    const deleteVehiculo = async (id) => {
        try {
            const res = await deleteVehiculoRequest(id) ;
            if(res.status===204) setVehiculos(vehiculos.filter((vehiculo)=>vehiculo._id !== id))

        } catch (error) {
            console.log(error);
        }
    }

    //creo un vehiculo
    const createVehiculo = async (vehiculo) => {
        console.log(vehiculo);
        try {
            const res = await createVehiculoRequest(vehiculo) ;
            console.log(res);
        } catch (error) {
            console.log("error al ingresar datos");
           // console.log(error);
        }
    }

    //actualizo vehiculo
    const updateVehiculo = async (id,task) =>{
        try {
            await updateVehiculoRequest(id,task) ;
        } catch (error) {
            console.log(error)
        }
    }

    return (<VehiculosContext.Provider value={{
                vehiculos,
                getVehiculos,
                deleteVehiculo,
                createVehiculo,
                getVehiculo,
                updateVehiculo
            }}      
         >
        {children}
    </VehiculosContext.Provider>)

}