const express = require('express');
const router = express.Router();
const { register, login, updateProfile, updatePassword, deleteAccount, addFavorite, removeFavorite } = require('../controllers/authControllers');
const auth = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/me', auth, require('../controllers/authControllers').getProfile);
router.post('/logout', (req, res) => {
  // Tu peux logguer l'email si tu l'envoies dans le body
  console.log(`⛔ Déconnexion : ${req.body.email || "Deconnexion de l'utilisateur"} à ${new Date().toLocaleString()}`);
  res.json({ msg: "Déconnexion enregistrée" });
});
router.put('/me', auth, updateProfile);
router.put('/me/password', auth, updatePassword);
router.delete('/delete', auth, deleteAccount);
router.post('/favorites/add', auth, addFavorite);
router.post('/favorites/remove', auth, removeFavorite);

module.exports = router;
