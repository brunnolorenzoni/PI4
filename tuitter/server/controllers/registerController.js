const {registerValidation} = require('../validations/JoiValidation');
const tokenController = require('../controllers/tokenController');

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.registerUser = async (req, res) => {
    
    const dataBody = req.body;
    
    const {error} = registerValidation(dataBody);
    if(error){
        return res.status(400).send(error.details[0].message);
    }

    if(dataBody.password !== dataBody.confirmPassword){
        res.status(400).json({"message": "Senhas não conferem"});
    }

    const emailExist = await User.findOne({email: dataBody.email});
    if(emailExist) {
        return res.status(400).json({"message": "Email já registrado"});
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(dataBody.password, salt);

    const user = new User({
        username: dataBody.username,
        email: dataBody.email,
        password: hashPassword,
        gender: dataBody.gender,
    });

    try {
        const savedUser = await user.save();
        const token = tokenController.generateToken(savedUser);
        res.header('token', token).status(200).json({"message": "Registrado com sucesso"});
    } catch (err){
        res.status(400).json({"message": "Erro ao registrar usaurio"});
    }

}