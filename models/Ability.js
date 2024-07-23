const mongoose = require('mongoose')

const { Schema } = mongoose

 const abilitySchema = new Schema({
    title:{
        type: String,
        
    },
    tagIcon:{
        type: String,
        
    }, 
    description:{
        type: String,
        
    },
 })

 const Ability = mongoose.model('Ability', abilitySchema )

 module.exports = {
    Ability,
    abilitySchema
 }