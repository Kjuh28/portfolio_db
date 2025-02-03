import { createAbilitie, deleteAbilitie, editAbilitie, getAllAbilities } from "../controller/abilitie_controller.js";
import { Router } from 'express'

const abilitieRoute = Router()

abilitieRoute.post('/abilities', createAbilitie)
abilitieRoute.get('/abilities', getAllAbilities)
abilitieRoute.post('/abilities/:id_adm/:id', editAbilitie)
abilitieRoute.delete('/abilities/:id', deleteAbilitie)

export default abilitieRoute


