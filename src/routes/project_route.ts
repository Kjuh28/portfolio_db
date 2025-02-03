import {createProject, deleteProject, editProject, getAllProjects, getProjectByTitle} from "../controller/project_controller.js";
import { Router } from 'express'

const projectRoute = Router()

export default async function projectRouter(){
    projectRoute.post('/projects', createProject)
    projectRoute.get('/projects/:title', getProjectByTitle)
    projectRoute.get('/projects', getAllProjects)
    projectRoute.post('/projects/:id_adm/:id', editProject)
    projectRoute.delete('/projects/:id', deleteProject)
}