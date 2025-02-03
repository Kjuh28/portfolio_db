import projectRouter from "./project_route.js";
import AbilitieRouter from "./abilitie_route.js";
import { Router } from 'express'

const routers = Router()

routers.use('/teste', projectRouter)
routers.use('/teste', AbilitieRouter)

export default routers

