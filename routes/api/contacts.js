const express = require('express');
const router = express.Router();
const contactsCtrl = require('../../controllers/contacts');

router.post('/', contactsCtrl.create);
router.get('/', contactsCtrl.index);
// router.get('/:id', locationsCtrl.details);

module.exports = router;