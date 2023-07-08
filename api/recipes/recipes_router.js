const router = require("express").Router();
const Recipe = require("./recipes_model");
router.get("/", async (req, res) => {
  const result = await Recipe.getRecipes();
  res.json(result);
});

router.get("/:id", async (req, res) => {
  const result = await Recipe.getRecipe(req.params.id);
  res.json(result);
});

module.exports = router;
