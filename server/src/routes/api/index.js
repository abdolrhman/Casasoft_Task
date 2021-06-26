'use strict';
const express = require('express');
const router = express.Router();
const authRouter = require('./auth.route');
const ingredientRouter = require('./ingredient.route');

router.get('/status', (req, res) => {
  res.send({ status: 'OK' });
}); // api status

router.use('/auth', authRouter); // mount auth paths
router.use('/ingredient', ingredientRouter); // mount ingredient paths

module.exports = router;
