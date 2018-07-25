import axios from 'axios';

export default {
  // GET ALL RECIPES
  getRecipes: () => axios.get('/api/recipes'),
  // GET USER BY ID
  getRecipe: id => axios.get(`/api/recipes/${id}`),
  // UPDATE RECIPE BY ID
  updateRecipe: (id, data) => axios.put(`/api/recipes/${id}`, data),
  // DELETE RECIPE BY ID
  deleteRecipe: id => axios.delete(`/api/recipes/${id}`),
  // POST NEW RECIPE
  saveRecipe: recipeData => axios.post('/api/recipes', recipeData)
};
