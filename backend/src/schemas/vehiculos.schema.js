//validaciones de los datos definidos en el model
import {z} from 'zod' ;
export const createVehiculoSchema = z.object({
    marca : z.string({
        required_error : 'La marca es requerida / solicitada'
    }),
    modelo : z.string({
        required_error : 'El modelo es requerido / solicitado'
    }),
    year : z.string({
        required_error : 'El año es requerido / solicitado'
    }),
})