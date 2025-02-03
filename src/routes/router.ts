import projectRouter from "./project_route.js";
import AbilitieRouter from "./abilitie_route.js";
import { Router } from 'express'

const router = Router()

export default async function routers(){
    router.use('/api', projectRouter)
    router.use('/api', AbilitieRouter)
}
