'use strict';

const express = require('express');
const multer = require('multer');
const router = express.Router();
const auth = require('../../middlewares/authorization');
const ingredientController = require('../../controllers/ingredient.controller');

let storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads');
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname);
  }
});

const upload = multer({
  storage
}).single('image');
router.post('/', upload, ingredientController.create); // validate and register

module.exports = router;
