const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  prepTime: String,
  cookTime: String,
  servings: Number,
  difficulty: String,
  ingredients: [String],
  instructions: [String],
  category: String,
  rating: Number,
  reviews: Number,
  tags: [String]
});

module.exports = mongoose.model('Recipe', recipeSchema);