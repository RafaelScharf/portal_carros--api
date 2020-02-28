"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CarImageSchema extends Schema {
  up() {
    this.create("car_images", table => {
      table.increments();
      table
        .integer("car_id")
        .unsigned()
        .references("id")
        .inTable("cars")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("path").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("car_images");
  }
}

module.exports = CarImageSchema;
