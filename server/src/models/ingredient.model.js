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
    },
    fat: {
      type: String
    },
    cal: {
      type: String
    },
    carb: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

// Duplicate the ID field.
ingredientSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
ingredientSchema.set('toJSON', {
  virtuals: true
});

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
