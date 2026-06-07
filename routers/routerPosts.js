const express = require('express');
const router = express.Router();
// importo il controller della risorsa post
const controller = require('../controllers/controller');

router.get('/', controller.index);
// troviamo la rotta e ritorniamo una singola post
router.get('/:id', controller.show);
// Destroy route per cancelare un post in base al id
router.delete('/:id', controller.destroy);
module.exports = router;