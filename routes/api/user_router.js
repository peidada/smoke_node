const router = require('koa-router')();
const user_contorller = require('../../app/controllers/user_controller');

router.get('/api/users/getUser', user_contorller.getUser);
router.post('/api/users/registerUser', user_contorller.registerUser);

module.exports = router;