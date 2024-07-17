const router = require('express').Router()

const projectController = require('../controllers/ProjectController')

//funções
router.route('/projects').post((req, resp) => projectController.create(req, resp))

router.route('/projects').get((req, resp) => projectController.getAll(req, resp))

router.route('/projects/:id').get((req, resp) => projectController.get(req, resp))

module.exports = router