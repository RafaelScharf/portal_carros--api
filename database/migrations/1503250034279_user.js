"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("users", table => {
      table.increments();
      table
        .string("username", 80)
        .notNullable()
        .unique();
      table
        .string("email", 254)
        .notNullable()
        .unique();
      table.string("password", 60).notNullable();
      table.string("name", 30);
      table.string("phone", 15);
      table.string("store", 20);
      table.string("state", 20);
      table.string("city", 20);
      table.boolean("active").defaultTo(true);
      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }

}

module.exports = UserSchema;
