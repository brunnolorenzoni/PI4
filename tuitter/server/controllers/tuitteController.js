const User = require('../models/User');
const Tuitte = require('../models/Tuitte');

exports.getMyTuittes = async (req, res) => {

    try {
        const user = await User.findById(req.user._id);
        const tuittes = await Tuitte.find({"user.id": user._id}).sort({date: 'desc'});

        res.status(200).json({
            data: tuittes,
        });

    } catch (err){
        res.status(400).send({"message": "Erro na requisição"});
    }

}

exports.getAllTuittes = async (req, res) => {

    try {
        const user = await User.findById(req.user._id);

        const ids = [user._id];

        for(let i in user.following){
            ids.push(user.following[i])
        }

        const tuittes = await Tuitte.find().where('user.id').in(ids).sort({date: 'desc'}).exec();

        res.status(200).json({
            data: tuittes,
        });

        

    } catch (err){
        res.status(400).send({"message": "Erro na requisição"});
    }

}

exports.setTuittes = async (req, res) => {

    const data = req.body;

    const user = await User.findById(req.user._id);

    const tuitte = new Tuitte({
        text: data.data,
        user: {
            id: user._id,
            username: user.username
        },
    });

    try {
        const savedTuitte = await tuitte.save();
        res.status(200).json({"message": "Sucesso"});
    } catch (err){
        res.status(400).json({"message": "Erro ao registrar usaurio"});
    }

}