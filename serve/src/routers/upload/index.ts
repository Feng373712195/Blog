export default {}

const Router = require('@koa/router');
const router = new Router();

const uploadController = require('../../controllers/upload')

router.put('/upload', uploadController.upload)

router.delete('/upload/')

module.exports = router
