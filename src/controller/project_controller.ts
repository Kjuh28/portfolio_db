import { randomUUID } from "node:crypto";
import Project from "../models/project_model.js";
import { FastifyRequest, FastifyReply } from "fastify";

interface BodyType{
    id: string,
    id_adm: string,
    title: string,
    description: string,
    git_link: string,
    image: string
}

export async function createProject(req: FastifyRequest<{Body: BodyType}> , resp: FastifyReply){
    await Project.create({
        id: randomUUID(),
        id_adm: req.body.id_adm,
        title: req.body.title,
        description: req.body.description,
        git_link: req.body.git_link,
        image: req.body.image,
    })
}

export async function getProjectByTitle(req: FastifyRequest<{Params: BodyType}>, resp: FastifyReply){
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