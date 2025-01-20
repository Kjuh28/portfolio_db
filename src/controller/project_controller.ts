import { randomUUID } from "node:crypto";
import Project from "../models/project_model.js";
import { FastifyRequest, FastifyReply } from "fastify";

interface ProjectType{
    id: string,
    id_adm: string,
    title: string,
    description: string,
    git_link: string,
    page_link: string,
    image: string
}

export async function createProject(req: FastifyRequest<{Body: ProjectType}> , resp: FastifyReply){
    await Project.create({
        id: randomUUID(),
        id_adm: req.body.id_adm,
        title: req.body.title,
        description: req.body.description,
        git_link: req.body.git_link,
        page_link: req.body.page_link,
        image: req.body.image,
    })
}

export async function getProjectByTitle(req: FastifyRequest<{Params: ProjectType}>, resp: FastifyReply){
    const findByTitle = req.params.title
    const data = await Project.findOne({where: { title: findByTitle}});
    
    try {
        if (!data){
            resp.send('Projeto não encontrado!')
        }
        resp.send(data)
        console.log(data)

    } catch (error) {
        console.error(error)
        resp.send(error)
    }
    
}

export async function getAllProjects(req: FastifyRequest, resp: FastifyReply){
    const data = await Project.findAll()

    try {
        if(!data){
            resp.send('Projetos não encontrados!')
        }
        resp.send(data)
    } catch (error) {
        resp.status(404).send('Not found!')
    }
}
    
export async function editProject(req: FastifyRequest<{Body: ProjectType, Params: ProjectType}>, resp:FastifyReply){
    const projectId = req.params.id
    const id_adm = req.params.id_adm

    const data = await Project.findByPk(projectId)

    try {
        if(!data){
            resp.send('Projeto não encontrado!')
        }
        // console.log('----------------------')
        // console.log(data?.title)
        // req.body.title ? (data?.title = req.body.title) : data?.dataValues.title
        // req.body.description ? data?.description : req.body.description
        // req.body.git_link ? data?.git_link : req.body.git_link
        // req.body.image ? data?.image : req.body.image

        // await data?.save({fields: ['title', 'description', 'git_link', 'image']})

    } catch (error) {
        resp.status(404).send('Pagina não encontrada!')
    }
}