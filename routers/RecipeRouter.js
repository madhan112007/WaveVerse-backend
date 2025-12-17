const express = require('express');
const router = express.Router();
const { getAllRecipes, getRecipe, createRecipe, updateRecipe, deleteRecipe } = require('../controllers/RecipeController');

router.get('/', getAllRecipes);
router.get('/:id', getRecipe);
router.post('/', createRecipe);
router.put('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);

module.exports = router;