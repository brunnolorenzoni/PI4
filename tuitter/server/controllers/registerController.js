const {registerValidation} = require('../validations/JoiValidation');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.registerUser = async (req, res) => {
    
    const dataBody = req.body;
    
    const {error} = registerValidation(dataBody);
    if(error){
        return res.status(400).send(error.details[0].message)
    }

    if(dataBody.password !== dataBody.confirmPassword){
        res.status(400).send("Senha não batem");
    }

    const emailExist = await User.findOne({email: dataBody.email});
    if(emailExist) {
        return res.status(400).send("Email já existe");
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
        res.send(savedUser);
    } catch (err){
        res.status(400).send(err);
    }

}