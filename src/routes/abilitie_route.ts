import { FastifyInstance } from "fastify";
import { createAbilitie, getAllAbilities } from "../controller/abilitie_controller.js";

export default function AbilitieRouter(app: FastifyInstance){
    app.post('/abilities', createAbilitie)
    app.get('/abilities', getAllAbilities)
}


