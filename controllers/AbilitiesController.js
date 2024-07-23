const {Ability: AbilityModel} = require('../models/Ability')

const abilitiesController = {
    
    create: async (req, resp) => {
        try{
            const ability = {
                title: req.body.title,
                tagIcon: req.body.tagIcon,
                description: req.body.description
            }

            const response = await AbilityModel.create(ability)
            resp.status(201).json({ response, msg:'Habilidade criada com sucesso!'})
        } catch (err) {
            console.log(err)
        }
    },

    getAll: async (req, resp) =>{
        try{
            const abilities = await AbilityModel.find()
            resp.json(abilities)
        } catch(err){
            console.log(err)
        }
    },
    
    get: async(req, resp) =>{
        try{
            const id = req.params.id
            const ability = await AbilityModel.findById(id)

            resp.json(ability)
            if(!ability){
                resp.status(404).json({msg: "Habilidade não encontrada"})
                return
            }

        } catch(err){
            console.log(err)
        }
    }
}

module.exports = abilitiesController