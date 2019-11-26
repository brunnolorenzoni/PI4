const User = require('../models/User');

exports.search = async (req, res) => {
    const term = req.body.search;

    try {

        const users = await User.find({
            $or: [
                {
                    "username": { "$regex": term, '$options' : 'i' }
                },
                {
                    "email": {"$regex": term, '$options' : 'i'}
                }
            ]
            
        });

        if(users.length) {
            return res.status(200).json(users);
        } else {
            return res.status(200).json("Nenhum usuario encontrado");
        }


    } catch (err){
        res.status(400).send({"message": "Erro na requisição"});
    }

    
}