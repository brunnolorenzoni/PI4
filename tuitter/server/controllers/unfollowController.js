const User = require('../models/User');

exports.unfollow = async (req, res) => {

    try {

        const idToUnfollow = req.params.idToUnfollow;

       //USUARIO PARA SE DAR O UNFOLLOW
        const userToUnfollow = await User.findById(idToUnfollow);

        //USUARIO LOGADO QUE QUER DAR UNFOLLOW
        const userUnfollowing = await User.findById(req.user._id);

        //VERFICAIR ANTES
        if(userUnfollowing.following.length <= 0){
            return res.status(400).send({"message": "Você não segue ninguem"});
        }

        var hasInFollowing = userUnfollowing.following.indexOf(idToUnfollow);

        if(hasInFollowing === -1){
            return res.status(200).send({"message": "Você não segue essa pessoa"});
        }
        

        var indexUnfollow = userToUnfollow.followers.indexOf(req.user._id);
        if (indexUnfollow !== -1) userToUnfollow.followers.splice(indexUnfollow, 1);

        var indexFollowing = userUnfollowing.following.indexOf(idToUnfollow);
        if (indexFollowing !== -1) userUnfollowing.following.splice(indexFollowing, 1);


        userToUnfollow.save();
        userUnfollowing.save();

        return res.status(200).send({"message": "Sucesso"});

    } catch (err){
        return res.status(400).send({"message": "Erro na requisição"});
    }

}