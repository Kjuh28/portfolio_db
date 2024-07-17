const mongoose = require('mongoose')

async function main() {

    try {
        
        mongoose.set("strictQuery", true)
        await mongoose.connect('mongodb+srv://kjuh28:Naolembro01@cluster0.ves97zz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('MongoDB database connected')
    } catch (error) {
        
        console.log(`Error: ${error}`)

    }
}

module.exports = main