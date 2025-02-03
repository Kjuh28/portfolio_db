import { randomUUID, UUID } from "node:crypto";
import Project from "../models/project_model.js";
import {Request, Response } from 'express'

export async function createProject(req: Request , resp: Response){
    try {
        await Project.create({
            id: randomUUID(),
            id_adm: req.body.id_adm,
            title: req.body.title,
            description: req.body.description,
            git_link: req.body.git_link,
            page_link: req.body.page_link,
            image: req.body.image,
        })
    } catch (error: any) {
        resp.status(400).send(error.message)
    }
    
}

export async function getProjectByTitle(req: Request, resp: Response){
    const findByTitle = req.params.title
    const data = await Project.findOne({where: { title: findByTitle}});
    
    try {
        if (!data){
            resp.send('Projeto não encontrado!')
        }
        resp.send(data)
        console.log(data)

    } catch (error: any) {
        resp.send(error.message)
    }
    
}

export async function getAllProjects(req: Request, resp: Response){
    const data = await Project.findAll()

    try {
        if(!data){
            resp.send('Projetos não encontrados!')
        }
        resp.send(data)
    } catch (error: any) {
        resp.status(404).send(error.message)
    }
}
    
export async function editProject(req: Request, resp: Response){
    const projectId = req.params.id
    const idAdm = req.params.id_adm

    const data = await Project.findByPk(projectId)

    try {
        if(!data){
            resp.send('Projeto não encontrado!')
        }
        req.body.title ? (data!.title = req.body.title) : data?.dataValues.title
        req.body.description ? (data!.description = req.body.description) : req.body.description
        req.body.git_link ? (data!.git_link = req.body.git_link ) : req.body.git_link
        req.body.image ? (data!.image = req.body.image) : req.body.image
        req.body.page_link ? (data!.page_link = req.body.page_link) : req.body.page_link

        await data?.save({fields: ['title', 'description', 'git_link', 'page_link' , 'image']})

    } catch (error: any) {
        resp.status(404).send(error.message)
    }
}

export async function deleteProject(req: Request, resp: Response){
    const projectId = req.params.id

    const data = await Project.findByPk(projectId)

    try {
        if(!data){
            resp.send('Projeto não encontrado')
        }
        await Project.destroy({where: {id: projectId}})
        resp.send('Projeto apagado com sucesso!')
        
    } catch (error: any) {
        resp.send(error.message)
    }
}