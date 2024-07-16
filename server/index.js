// To connect to MongoDB database
// const express = require('express')
// var MongoClient = require ('mongodb').MongoClient
// var cors = require('cors')
// var multer = require('multer')


// const app = express()
// app.use(cors())

// var CONNECTION_STRING = 'mongodb+srv://kjuh28:Naolembro01@cluster0.ves97zz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


// var DATABASENAME = 'portfolio'
// var database

// app.listen(5038, () => {
//     MongoClient.connect(CONNECTION_STRING, (error, client) =>{
//         database = client.db(DATABASENAME)
//         console.log('MongoDB Connection Successfull')
//     })
// })

// app.get('/server/portfolio/', (req, resp) => {
//     database.collection('projects').find({}).toArray((error, result) =>{
//         resp.send(result)
//     })
// })

// For backend and express
const express = require('express')
const dbUrl = 'mongodb+srv://kjuh28:Naolembro01@cluster0.ves97zz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' 
const app = express()
const cors = require('cors')
console.log('App listen at port 5000')
app.use(express.json())
app.use(cors())
app.get('/', (req, resp)=>{
    resp.send('App is working')
})
app.listen(5000)

// To connect with MongoDB database
const mongoose = require('mongoose')
mongoose.connect(dbUrl, {
    dbName: 'portfolio',
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.info('Connected to database')
}).catch((err) => console.log(err))




