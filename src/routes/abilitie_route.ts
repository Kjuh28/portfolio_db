import { FastifyInstance } from "fastify";
import { createAbilitie, deleteAbilitie, editAbilitie, getAllAbilities } from "../controller/abilitie_controller.js";

export default function AbilitieRouter(app: FastifyInstance){
    app.post('/abilities', createAbilitie)
    app.get('/abilities', getAllAbilities)
    app.post('/abilities/:id_adm/:id', editAbilitie)
    app.delete('/abilities/:id', deleteAbilitie)
}


