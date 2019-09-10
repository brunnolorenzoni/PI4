const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/', async (req, res) => {
    const dataBody = req.body;

    const user = await User.findOne({email: dataBody.email});
    if(!user) {
        return res.status(400).send("Email não existe");
    }

    const validPassword = await bcrypt.compare(dataBody.password, user.password);

    if(!validPassword){
        return res.status(400).send("Senha invalida");
    }

    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('token', token).send(token)

});

module.exports = router;
