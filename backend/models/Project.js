const mongoose = require('mongoose')

const { Schema } = mongoose

const projectSchema = new Schema({ 
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        requied:true
    },
    git: {
        type: String,
        requied:true
    },
    img: {
        type: String,
        requied:true
    }
}, {timestamps: true})

const Project = mongoose.model('Project', projectSchema)

module.exports = {
    Project,
    projectSchema,
}