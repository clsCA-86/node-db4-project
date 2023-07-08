const db = require("../../data/db-config");

async function getRecipes() {
  const result = await db("recipes");
  return result;
}

async function getRecipe(id) {
  const [result] = await db("recipes").where("recipe_id", id);
  return result;
}
module.exports = {
  getRecipes,
  getRecipe,
};
