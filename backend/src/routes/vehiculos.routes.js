import { Router } from "express";
//solo ocupare el validaddor de esquemas
import { validateSchema } from "../middlewares/validator.middleware.js";
import { crearVehiculo, 
        deleteVehiculo, 
        getVehiculo, 
        getVehiculos, 
        updateVehiculo} from "../controllers/vehiculos.controller.js";
import { createVehiculoSchema } from "../schemas/vehiculos.schema.js";

const router = Router();

//ojo, todo esto se hace sin login
//colocamos data en la db vehiculos
router.post('/vehiculos',validateSchema(createVehiculoSchema),crearVehiculo);

//listar vehiculos
router.get('/vehiculos',getVehiculos);

//listar un vehiculo en especifico
router.get('/vehiculos/:id',getVehiculo) ;

//eliminar vehiculo
router.delete('/vehiculos/:id',deleteVehiculo) ;

//actualizar el vehiculo
router.put('/vehiculos/:id',updateVehiculo) ;

export default router ;
