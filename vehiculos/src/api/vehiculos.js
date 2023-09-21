import axios from './axios'

//lista de vehiculos
export const getVehiculosRequest = async () => axios.get('/vehiculos') ;
//listar un vehiculo
export const getVehiculoRequest = async (id) => axios.get(`/vehiculos/${id}`)

//eliminar vehiculo
export const deleteVehiculoRequest = async (id) => axios.delete(`/vehiculos/${id}`);

//crear un vehiculo
export const createVehiculoRequest = async (vehiculo) => axios.post('/vehiculos',vehiculo) ;

//actualiza vehiculo
export const updateVehiculoRequest = async (id,vehiculo) => axios.put(`/vehiculos/${id}`,vehiculo) ;
