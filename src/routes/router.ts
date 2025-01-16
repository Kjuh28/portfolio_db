import {FastifyInstance} from "fastify";
import projectRouter from "./project_route.js";

export default async function routers(app: FastifyInstance){
    app.register(projectRouter, {prefix: '/api'})
}
