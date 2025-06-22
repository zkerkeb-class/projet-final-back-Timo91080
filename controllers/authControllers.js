const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  const exist = await User.findOne({ email });
  if (exist) return res.status(400).json({ msg: 'Email déjà utilisé' });

  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashed });
  await user.save();

  res.status(201).json({ msg: 'Utilisateur créé' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: 'Email invalide' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: 'Mot de passe invalide' });

  const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '3d' }
  );

  // Ajoute ce log :
  console.log(`✅ Connexion : ${user.username} (${user.email}) à ${new Date().toLocaleString()}`);

  res.json({ token, user: { id: user._id, username: user.username } });
};

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  if (!user) return res.status(404).json({ msg: 'Utilisateur non trouvé' });
  res.json(user);
};

exports.updateProfile = async (req, res) => {
  const { username, email } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (username) user.username = username;
    if (email) user.email = email;
    await user.save();
    res.json({ msg: "Profil mis à jour", user });
  } catch {
    res.status(500).json({ msg: "Erreur lors de la mise à jour" });
  }
};

exports.updatePassword = async (req, res) => {
  const { password } = req.body;
  try {
    const user = await User.findById(req.user.id);
    user.password = await bcrypt.hash(password, 10);
    await user.save();
    res.json({ msg: "Mot de passe mis à jour" });
  } catch {
    res.status(500).json({ msg: "Erreur lors de la mise à jour du mot de passe" });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id);
    res.json({ msg: "Compte supprimé" });
  } catch {
    res.status(500).json({ msg: "Erreur lors de la suppression" });
  }
};

// Ajouter un article aux favoris
exports.addFavorite = async (req, res) => {
  const { articleLink } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user.favorites.includes(articleLink)) {
      user.favorites.push(articleLink);
      await user.save();
    }
    res.json({ favorites: user.favorites });
  } catch {
    res.status(500).json({ msg: "Erreur lors de l'ajout aux favoris" });
  }
};

// Retirer un article des favoris
exports.removeFavorite = async (req, res) => {
  const { articleLink } = req.body;
  try {
    const user = await User.findById(req.user.id);
    user.favorites = user.favorites.filter(link => link !== articleLink);
    await user.save();
    res.json({ favorites: user.favorites });
  } catch {
    res.status(500).json({ msg: "Erreur lors du retrait des favoris" });
  }
};
