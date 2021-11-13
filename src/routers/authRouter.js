const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/signin', authController.signIn);
router.post('/signup', authController.signUp);
router.get('/getone/:id', authController.getOne);
router.put('/updateProfile/:id', authController.updateProfile);

module.exports = router;
