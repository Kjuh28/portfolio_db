const router = require('express').Router()

//ServiceRouter
const projectsRouter = require('./projects')

router.use('/', projectsRouter)

module.exports = router