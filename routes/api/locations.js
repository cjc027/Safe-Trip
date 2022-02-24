const express = require('express');
const router = express.Router();
const locationsCtrl = require('../../controllers/locations');

router.post('/', locationsCtrl.create);
router.get('/', locationsCtrl.index);
// router.get('/:id', locationsCtrl.details);
// router.delete('/:id', locationsCtrl.deleteOne);

module.exports = router;