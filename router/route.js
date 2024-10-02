const express = require('express');
const model = require('../model/model');
const router = express.Router();
const {allurl , urlform , createurl ,fetchurl} = require('../controller/controller');

router.get('/urls',allurl);

router.route('/').get(urlform).post(createurl);

router.get('/:shorturl' , fetchurl);


module.exports = router;