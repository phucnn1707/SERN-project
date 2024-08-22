const express = require('express');
const exampleController = require('../controllers/example.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();

router.get('/example', authMiddleware, exampleController.getExample);

module.exports = router;
