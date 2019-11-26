const User = require('../models/User');

exports.listFollowers = async (req, res) => {}
exports.listFollowing = async (req, res) => {}

exports.follow = async (req, res) => {
    const idToFollow = req.params.idToFollow;
    try {

        const userToFollow = await User.findById(idToFollow);
        const userFollowing = await User.findById(req.user._id);


        //VERFICAIR ANTES
        var hasInFollowers = userFollowing.followers.indexOf(idToFollow);

        if(hasInFollowers !== -1){
            return res.status(200).send({"message": "Já segue"});
        }

        userToFollow.followers.push(userFollowing._id);
        userToFollow.save();
        
        userFollowing.following.push(userToFollow._id);
        userFollowing.save();

        return res.status(200).send({"message": "Sucesso"});

    } catch (err){
        return res.status(400).send({"message": "Erro na requisição"});
    }

}