import projectRouter from "./project_route.js";
import AbilitieRouter from "./abilitie_route.js";
import { Router } from 'express'

const routers = Router()

routers.use('/api', projectRouter)
routers.use('/api', AbilitieRouter)

export default routers

