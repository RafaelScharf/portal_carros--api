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
      table.string("store", 20);
      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }

  cars() {
    //Um usuário possui N carrosc
    return this.hasMany("App/Models/Car");
  }
}

module.exports = UserSchema;
