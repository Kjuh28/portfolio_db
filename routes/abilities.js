const router = require('express').Router()

const abilityController = require('../controllers/AbilitiesController')

router.route('/abilities').post((req, resp) => abilityController.create(req, resp))

router.route('/abilities').get((req, resp) => abilityController.getAll(req, resp))

router.route('/abilities/:id').get((req, resp) => abilityController.get(req, resp))

module.exports = router