/* eslint-disable object-shorthand */
const express = require('express');

//
const solaire = require('../models/solaire');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    let etatConnection = false
    reques
  res.render('index', { title: 'Dashboard' });
});

router.get('/solaire', (req, res) => {
  const tabVar1 = solaire.retrieve();
  res.render('solaire', { title: 'Solaire', tabVar1: tabVar1 });
});

router.get('/productionn1', (req, res) => {
    const tabVar1 = solaire.retrieve();
  res.render('productionn1', { title: 'Production 1', tabVar1: tabVar1 });
});
router.get('/productionn2', (req, res) => {
    const tabVar1 = solaire.retrieve();
  res.render('productionn2', { title: 'Production 1', tabVar1: tabVar1 });
});
module.exports = router;
