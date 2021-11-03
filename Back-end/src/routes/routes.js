const router = require('express').Router;

const controller = require('../controllers/controllers');

router.get('/tasks', controller.getAll);

module.exports = router;