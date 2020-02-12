const router = require('express').Router();

const userController = require('../controllers/userController');

router.post('/users', userController.create);

router.get('/users', userController.find);

module.exports = router;