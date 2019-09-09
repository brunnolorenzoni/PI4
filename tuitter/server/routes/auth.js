const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {

    const data = req.body;

    const emailExist = await User.findOne({email: data.email});
    if(emailExist) {
        return res.status(400).send("Email já existe");
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(data.password, salt);

    const user = new User({
        username: data.username,
        email: data.email,
        password: hashPassword,
        gender: data.gender,
    });

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err){
        res.status(400).send(err);
    }

});

router.post('/login', async (req, res) => {
    const data = req.body;

    const user = await User.findOne({email: data.email});
    if(!user) {
        return res.status(400).send("Email não existe");
    }

    const validPassword = await bcrypt.compare(data.password, user.password);

    if(!validPassword){
        return res.status(400).send("Senha invalida");
    }

    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('token', token).send(token)

});

router.post('/auth', async (req, res) => {
    const data = req.body;

});

module.exports = router;