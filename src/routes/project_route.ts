import {FastifyInstance} from "fastify";
import {createProject, editProject, getAllProjects, getProjectByTitle} from "../controller/project_controller.js";

export default async function projectRouter(app: FastifyInstance){
    app.post('/projects', createProject)
    app.get('/projects/:title', getProjectByTitle)
    app.get('/projects', getAllProjects)
    app.post('/projects/:id_adm/:id', editProject)
}