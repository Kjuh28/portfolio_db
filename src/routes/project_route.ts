import {FastifyInstance} from "fastify";
import {createProject, getProjectByTitle} from "../controller/project_controller.js";

export default async function projectRouter(app: FastifyInstance){
    app.post('/projects', createProject)
    app.get('/projects/:title', getProjectByTitle)
}