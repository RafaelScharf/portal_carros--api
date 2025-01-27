"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class CarImage extends Model {
  static get computed() {
    return ["url"];
  }

  getUrl({ path }) {
    return `${Env.get("APP_URL")}/images/${path}`;
  }
}

module.exports = CarImage;
