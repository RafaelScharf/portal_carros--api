"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Car extends Model {
  user() {
    //UM carro sempre pertence a 1 usuario
    return this.belongsTo("App/Models/User");
  }

  car_images() {
    //Um imovel possui muitas imagens
    return this.hasMany("App/Models/CarImage");
  }
}

module.exports = Car;
