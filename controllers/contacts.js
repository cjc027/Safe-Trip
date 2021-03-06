const Contact = require('../models/contact');

module.exports = {
    create,
    index,
    getOne,
    update
}

async function create(req, res){
    try {
        console.log(req.body, 'req.body in the contactsCtrl')
        let contact = await Contact.create({
            ...req.body,
            user: req.user
        })
        contact = await contact.populate('user');
        res.status(201).json({contact});
    } catch(err) {
        console.log(err, 'inside contactsCtrl');
        res.status(400).json({err})
    }
};

async function index(req, res){
    try {
        const contacts = await Contact.find({user: req.user._id}).populate("user").exec();
        res.status(200).json({contacts: contacts});
    } catch(err) {
        res.status(400).json({err});
    }
}

async function getOne(req, res){
    try {
        const contact = await Contact.findOne({_id: req.params.contactId}).populate("user").exec();
        res.status(200).json({contact: contact})
    } catch(err) {
        res.status(400).json({err})
    }
}

async function update(req, res){
    try {
        const contact = await Contact.findOne({_id: req.params.contactId})
        contact.fullName = req.body.fullName
        contact.email = req.body.email
        contact.phoneNumber = req.body.phoneNumber
        contact.save()
        res.status(201).json({contact})
    } catch(err) {
        res.status(400).json({err})
    }
}