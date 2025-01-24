import {FastifyInstance} from "fastify";
import projectRouter from "./project_route.js";
import AbilitieRouter from "./abilitie_route.js";

export default async function routers(app: FastifyInstance){
    app.register(projectRouter, {prefix: '/api'})
    app.register(AbilitieRouter, {prefix: '/api'})
}
