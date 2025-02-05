import Abilitie from "../models/abilitie_model.js";
import { randomUUID } from "crypto";
export async function createAbilitie(req, resp) {
    try {
        await Abilitie.create({
            id: randomUUID(),
            id_adm: req.body.id_adm,
            title: req.body.title,
            icon_link: req.body.icon_link,
            description: req.body.description,
            icon_type: req.body.icon_type
        });
    }
    catch (error) {
        resp.status(400).send(error.message);
    }
}
export async function getAllAbilities(req, resp) {
    const data = await Abilitie.findAll();
    try {
        if (!data) {
            resp.status(404).send('Habilidades não encontradas!');
        }
        resp.send(data);
    }
    catch (error) {
        resp.send(error.message);
    }
}
export async function editAbilitie(req, resp) {
    const abilitieId = req.params.id;
    const idAdm = req.params.id_adm;
    const data = await Abilitie.findByPk(abilitieId);
    try {
        if (!data) {
            resp.send('Habilidades não encontradas!');
        }
        req.body.title ? (data.title = req.body.title) : data?.dataValues.title;
        req.body.icon_link ? (data.icon_link = req.body.icon_link) : data?.dataValues.icon_link;
        req.body.description ? (data.description = req.body.description) : data?.dataValues.description;
        req.body.icon_type ? (data.icon_type = req.body.icon_type) : data?.dataValues.icon_type;
        data?.save({ fields: ['title', 'icon_link', 'description', 'icon_type'] });
    }
    catch (error) {
        resp.send(error.message);
    }
}
export async function deleteAbilitie(req, resp) {
    const projectId = req.params.id;
    const data = await Abilitie.findByPk(projectId);
    try {
        if (!data) {
            resp.send('Habilidade não encontrada!');
        }
        Abilitie.destroy({ where: { id: projectId } });
        resp.send('Habilidade apagada com sucesso!');
    }
    catch (error) {
        console.log(error);
        resp.send(error.message);
    }
}
