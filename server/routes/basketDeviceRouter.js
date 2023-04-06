const Router = require('express')
const router = new Router()
const basketDeviceController = require('../controllers/basketDeviceController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', basketDeviceController.create)
router.get('/', authMiddleware, basketDeviceController.getAll)

module.exports = router