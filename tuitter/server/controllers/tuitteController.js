const User = require('../models/User');

exports.getTuittes = async (req, res) => {

    //res.json({"posts": [{"message": "Oi"}, {"message": "Oi"}, {"message": "Oi"}]})
    //res.send(req.user)
    const user = await User.findOne({_id: req.user});
    res.json(user)

}