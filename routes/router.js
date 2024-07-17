const router = require('express').Router()

//ServiceRouter
const projectsRouter = require('./projects')

router.use('/', projectsRouter)

const port = process.env.port || 3001

module.exports = router