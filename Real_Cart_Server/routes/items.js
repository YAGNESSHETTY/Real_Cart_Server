const express = require('express');

const router = express.Router();

const {getAllItems,getItem} = require('../controllers/item')

router.route('/all').get(getAllItems);
router.route('/products').get(getItem);

module.exports = router;