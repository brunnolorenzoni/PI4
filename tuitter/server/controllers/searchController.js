const User = require('../models/User');

const isFollowing = (me, user) => {
    

    if(!me.following.length){
        return false;
    }
    
    if(me.following.indexOf(user._id) === -1){
        return false;
    }

    return true;
}

exports.searchUser = async (req, res) => {

    const me = await User.findById(req.user._id);

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

            const usersFind = [];

            for(let i in users){

                if(users[i]._id.toString() != me._id.toString()){
                    usersFind.push({
                        id: users[i]._id,
                        user: users[i],
                        isFollowing: isFollowing(me, users[i])
                    })
                }
                
            }



            return res.status(200).json(usersFind);
        } else {
            return res.status(204).json("Nenhum usuario encontrado");
        }


    } catch (err){
        res.status(400).send({"message": "Erro na requisição"});
    }

    
}