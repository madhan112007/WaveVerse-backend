const express = require('express');
const router = express.Router();
const { getAllRecipes, createRecipe, updateRecipe, deleteRecipe } = require('../controllers/RecipeController');

router.get('/', getAllRecipes);
router.post('/', createRecipe);
router.put('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);

module.exports = router;