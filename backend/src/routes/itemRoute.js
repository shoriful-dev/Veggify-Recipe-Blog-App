const express = require('express');
const router = express.Router();
const {getAllItems} = require('../controller/itemController');

const ItemController = require('../controller/itemController');

router.get('/all-items', ItemController.getAllItems);
router.get('/items', ItemController.getSeachedItems);

module.exports = router;
