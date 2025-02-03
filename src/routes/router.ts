import projectRouter from "./project_route.js";
import AbilitieRouter from "./abilitie_route.js";
import { Router } from 'express'

const routers = Router()

routers.get('/api', projectRouter)
routers.get('/api', AbilitieRouter)

export default routers

