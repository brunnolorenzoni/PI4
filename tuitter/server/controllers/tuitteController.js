const User = require('../models/User');
const Tuitte = require('../models/Tuitte');

exports.getTuittes = async (req, res) => {


    try {
        const user = await User.findById(req.user._id);
        const tuittes = await Tuitte.find({user: req.user._id}).sort({date: 'desc'});

        if(tuittes.length){
            res.status(200).json({
                data: tuittes,
                user: user
            });
        } else {
            res.status(200).json("Sem tuittes");
        }

    } catch (err){
        res.status(400).send({"message": "Erro na requisição"});
    }

}

exports.setTuittes = async (req, res) => {

    const data = req.body;
    const user = req.user;

    const tuitte = new Tuitte({
        text: data.data,
        user: user,
    });

    try {
        const savedTuitte = await tuitte.save();
        res.status(200).json({"message": "Sucesso"});
    } catch (err){
        res.status(400).json({"message": "Erro ao registrar usaurio"});
    }

}