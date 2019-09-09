const router = require('express').Router();
const User = require('../model/User');

router.post('/register', async (req, res) => {

    const data = req.body;

    const user = new User({
        username: data.username,
        email: data.email,
        password: data.password,
        gender: data.gender,
    });

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err){
        res.status(400).send(err);
    }

});

router.post('/login', (req, res) => {
    res.send('Login');
});

module.exports = router;