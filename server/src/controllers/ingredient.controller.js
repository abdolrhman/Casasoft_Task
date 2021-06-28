'use strict';

const Ingredient = require('../models/ingredient.model');
const httpStatus = require('http-status');

exports.create = async (req, res, next) => {
  try {
    const { title } = req.body;
    const ingredient = new Ingredient({
      title,
      image: req.file.filename
    });
    const savedIngredient = await ingredient.save();
    res.status(httpStatus.CREATED);
    res.send(savedIngredient.transform());
  } catch (error) {
    return next(error);
  }
};

exports.list = async (req, res, next) => {
  try {
    const ingredients = await Ingredient.find();

    res.send({ entities: ingredients });
  } catch (error) {
    return next(error);
  }
};
