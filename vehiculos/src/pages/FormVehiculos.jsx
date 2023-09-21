import {useForm} from 'react-hook-form'
import { useVehiculos } from '../context/VehiculosContext'
import { useNavigate, useParams} from 'react-router-dom';
import { useEffect } from 'react';


function FormVehiculos(){
    const {register,handleSubmit,setValue} = useForm() ;
    const {createVehiculo,getVehiculo,updateVehiculo} = useVehiculos() ;
    const navigate = useNavigate()
    const params = useParams() ;

    //este useEffect lo usas cuando editas el vehiculo y obtienes su data
    //para poder ingresarla en los objetos de formulario
    useEffect(()=>{
        async function loadVehiculos(){
            if (params.id){
                const vehiculo = await getVehiculo(params.id);
                setValue('marca',vehiculo.marca),
                setValue('modelo',vehiculo.modelo),
                setValue('year',vehiculo.year)
            }
        }

        loadVehiculos() ;
    },[])


    //aun no voy a actualizar, por lo que no voy a requerir de datos adicionales

    const onSubmit = handleSubmit( (data)=>{

        //si vehiculo existe, actualiza, de lo contrario, lo crea
        //..data son los contenido del formulario
        if(params.id)
        {
            updateVehiculo(params.id,{
                ...data
            })
        }else{
            createVehiculo({
                ...data
            })
        }
 
      //  console.log(...data);

        navigate('/vehiculos')
    } ) ;

   return ( 
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
    <form onSubmit={onSubmit}>
    <label htmlFor="title">Marca</label>
      <input 
          type="text" 
          placeholder="Marca" 
          {...register('marca')}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          autoFocus
      />
        <label htmlFor="title">Modelo</label>
      <input 
          type="text" 
          placeholder="Modelo" 
          {...register('modelo')}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          autoFocus
      />
          <label htmlFor="title">Año</label>
      <input 
          type="text" 
          placeholder="Año" 
          {...register('year')}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          autoFocus
      />

        <button type='submit' className='bg-indigo-500 px-3 py-2 rounded-md'> 
            Enviar Datos
        </button>
        </form>
    </div>

   )
}

export default FormVehiculos