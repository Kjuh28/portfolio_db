import { createProject, deleteProject, editProject, getAllProjects, getProjectByTitle } from "../controller/project_controller.js";
export default async function projectRouter(app) {
    app.post('/projects', createProject);
    app.get('/projects/:title', getProjectByTitle);
    app.get('/projects', getAllProjects);
    app.post('/projects/:id_adm/:id', editProject);
    app.delete('/projects/:id', deleteProject);
}
