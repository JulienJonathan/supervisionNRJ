/* eslint-disable object-shorthand */
const express = require('express');

//
const solaire = require('../models/solaire');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const tabVar1 = solaire.retrieve();
  res.render('index', { title: 'Express', tabVar1: tabVar1 });
});

module.exports = router;
