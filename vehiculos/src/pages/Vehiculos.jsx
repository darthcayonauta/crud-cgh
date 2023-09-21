import { useEffect } from "react"
import { useVehiculos } from "../context/VehiculosContext"
import Card from "../components/Card"


function Vehiculos(){
 
//extrayendo la data desde el provider
const {getVehiculos,vehiculos} = useVehiculos() ;

//lista a todos los vehiculos y los coloca en un array
useEffect(()=>{
    getVehiculos();
},[])

if( vehiculos.length ===0 ) return (<h1> No hay Vehiculos</h1>)

 return ( 
    <>
    <h1>Lista de Vehiculos</h1>
    <br />
 <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
       
   
     {
        vehiculos.map( vehiculo => (
            <Card vehiculo={vehiculo} key={vehiculo._id}/>
        ))
     }
    </div>
    </>)
}

export default Vehiculos