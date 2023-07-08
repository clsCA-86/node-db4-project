exports.seed = function (knex, Promise) {
  return knex("ingredients_to_steps").insert([
    { ingredient_id: 1, step_id: 2, step_quantity: 0.014 },
  ]);
};
