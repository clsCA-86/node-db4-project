// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const sharedConfig = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: {
    directory: "./data/migrations",
  },
  seeds: {
    directory: "./data/seeds",
  },
  pool: {
    afterCreate: (conn, done) => {
      //runs after a connection is made to the sqlite engine
      conn.run("PRAGMA foreign_keys = ON", done); //turn on FK enforcement
    },
  },
};

module.exports = {
  development: {
    // needed for sqlite
    ...sharedConfig,
    connection: {
      filename: "./data/recipe_book.db3",
    },
  },
};
