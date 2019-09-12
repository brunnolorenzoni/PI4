const tokenController = require('../controllers/tokenController');
const {loginValidation} = require('../validations/JoiValidation');

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


exports.login = async (req, res) => {
    const dataBody = req.body;

    const {error} = loginValidation(dataBody);
    if(error){
        return res.status(400).send(error.details[0].message);
    }

    const user = await User.findOne({email: dataBody.email});
    if(!user) {
        return res.status(400).send("Email não existe");
    }

    const validPassword = await bcrypt.compare(dataBody.password, user.password);
    if(!validPassword){
        return res.status(400).send("Senha invalida");
    }

    const token = tokenController.generateToken(user);
    res.header('token', token).status(200).json({"message": "Token gerado"});

};