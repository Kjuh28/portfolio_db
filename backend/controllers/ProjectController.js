const { Project: ProjectModel } = require('../models/Project')

const projectController = {

    create: async (req, resp) => {
        try {
            const project = {
                name: req.body.name,
                description: req.body.description,
                git: req.body.git,
                img: req.body.img,
            }

            const response = await ProjectModel.create(project)
            resp.status(201).json({ response, msg:'Projeto criado com sucesso!'})
        } catch (err) {
            console.log(err)
        }
    },

    getAll: async(req, resp) =>{
        try{
            const projects = await ProjectModel.find()
            resp.json(projects)

        } catch (err) {
            console.log(err)
        }
    },
    get: async(req, resp) =>{
        try{
            // id => URL === GET
            const id = req.params.id
            const project = await ProjectModel.findById(id)

            resp.json(project)

            if(!project){
                resp.status(404).json({msg: "Projeto não encontrado"})
                return
            }

        } catch(err) {
            console.log(err)
        }
    }
}

module.exports = projectController