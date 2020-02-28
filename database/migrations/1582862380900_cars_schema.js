"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CarsSchema extends Schema {
  up() {
    this.create("cars", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("model").notNullable();
      table.string("brand").notNullable();
      table.string("year").notNullable();
      table.string("total_km").notNullable();
      table.string("fuel").notNullable();
      table.string("details");
      table
        .string("store")
        .unsigned()
        .references("store")
        .inTable("users")
        .onUpdate("CASCADE");
      table.decimal("price").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("cars");
  }

  user() {
    //UM carro sempre pertence a 1 usuario
    return this.belongsTo("App/Models/User");
  }

  images() {
    //Um imovel possui muitas imagens
    return this.hasMany("App/Models/Image");
  }
}

module.exports = CarsSchema;
