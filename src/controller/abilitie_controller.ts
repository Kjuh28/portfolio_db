import { FastifyRequest, FastifyReply } from "fastify";
import Abilitie from "../models/abilitie_model.js";
import { randomUUID } from "crypto";

export async function createAbilitie(req: FastifyRequest<{Body: Abilitie}>, resp: FastifyReply){
    await Abilitie.create({
        id: randomUUID(),
        id_adm: req.body.id_adm,
        title: req.body.title,
        icon_link: req.body.icon_link,
        description: req.body.description
    })
}

export async function getAllAbilities(req: FastifyRequest<{Body: Abilitie}>, resp: FastifyReply){
    const data = await Abilitie.findAll()
    if(!data){
        resp.status(404).send('Habilidades não encontradas!')
    }
    resp.send(data)
}

export async function editAbilitie(req: FastifyRequest<{Body: Abilitie, Params: Abilitie}>, resp: FastifyReply){

}