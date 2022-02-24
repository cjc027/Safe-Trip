const express = require('express');
const router = express.Router();
const locationsCtrl = require('../../controllers/locations');

router.post('/', locationsCtrl.create);
router.get('/', locationsCtrl.index);
router.get('/:locationId', locationsCtrl.details);
router.delete('/:locationId', locationsCtrl.deleteOne);

module.exports = router;