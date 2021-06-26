'use strict';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ingredientSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

ingredientSchema.method({
  transform() {
    const transformed = {};
    const fields = ['id', 'title', 'image'];

    fields.forEach(field => {
      transformed[field] = this[field];
    });

    return transformed;
  }
});

module.exports = mongoose.model('Ingredient', ingredientSchema);
