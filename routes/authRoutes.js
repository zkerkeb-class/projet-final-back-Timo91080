const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authControllers');
const auth = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/me', auth, require('../controllers/authControllers').getProfile);

module.exports = router;
