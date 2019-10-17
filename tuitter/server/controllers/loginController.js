const tokenController = require('../controllers/tokenController');
const {loginValidation} = require('../validations/validations');
const {isEmail} = require('../validations/validations');

const User = require('../models/User');
const bcrypt = require('bcryptjs');


exports.login = async (req, res) => {
    const dataBody = req.body;

    const isComplete = loginValidation(dataBody);
    if(isComplete.error){
        return res.status(400).send(error.details[0].message);
    }

    let user;

    if(isEmail(dataBody.user)){
        user = await User.findOne({"email": dataBody.user});
    } else {
        user = await User.findOne({"username": dataBody.user});
    }

    if(!user) {
        return res.status(400).json({"message": "Este usuário não existe", "field": "user"});
    }

    const validPassword = await bcrypt.compare(dataBody.password, user.password);
    if(!validPassword){
        return res.status(400).json({"message": "Senha incorreta", "field": "password"});
    }

    const token = tokenController.generateToken(user);
    res.status(200).json({"token": token});

};