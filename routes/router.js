const router = require('express').Router()

//ServiceRouter
const projectsRouter = require('./projects')
const abilitiesRouter = require('./abilities')

router.use('/', projectsRouter)
router.use('/', abilitiesRouter)

const port = process.env.port || 9001

module.exports = router