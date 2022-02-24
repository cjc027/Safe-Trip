const Location = require('../models/location');

module.exports = {
    create,
    index,
    details,
    deleteOne
}

async function create(req, res){
    try {
        console.log(req.body, 'req.body in the locations CTRL')
        let location = await Location.create({
            ...req.body,
            user: req.user
        });
        location = await location.populate('user');
        res.status(201).json({location});

    } catch(err) {
        console.log(err, 'inside CTRL')
        res.status(400).json({err})
    }
}

async function index(req, res){
    try {
        const locations = await Location.find({user: req.user._id}).populate("user").exec();
        res.status(200).json({locations: locations});
    } catch(err) {
        res.status(400).json({err});
    }
}

async function details(req, res){
    try {
        const location = await Location.findOne({_id: req.params.locationId}).populate("user").exec();
        res.status(200).json({location: location});
    } catch(err) {
        res.status(400).json({err});
    }
}

async function deleteOne(req, res){
    try {
        const location = await Location.findOneAndDelete({_id: req.params.locationId})
        res.status(200).json({location: location})
    } catch(err) {
        console.log(err, 'inside deleteOne Ctrl function');
        res.status(400).json({err})
    }
}