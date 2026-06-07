const express = require('express');
const router = express.Router();
// importo il controller della risorsa post
const controller = require('../controllers/controller');

router.get('/', controller.index);
module.exports = router;