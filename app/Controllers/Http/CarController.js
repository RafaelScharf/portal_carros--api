"use strict";
const Car = use("App/Models/Car");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with cars
 */
class CarController {
  /**
   * Show a list of all cars.
   * GET cars
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index() {
    const cars = Car.all();

    return cars;
  }

  /**
   * Create/save a new car.
   * POST cars
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, auth, response }) {
    const {id} = auth.user;
    const data = request.only([
      'model',
      'brand',
      'year',
      'total_km',
      'fuel',
      'details',
      'store',
      'price'
    ])

    const car = await Car.create({ ...data, user_id: id })

    return car

  }

  /**
   * Display a single car.
   * GET cars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params }) {
    const car = await Car.findOrFail(params.id);

    await car.load("images");

    return car;
  }

  /**
   * Update car details.
   * PUT or PATCH cars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request }) {
    const car = await Car.findOrFail(params.id)
    const data = request.only([
      'model',
      'brand',
      'year',
      'total_km',
      'fuel',
      'details',
      'store',
      'price'
    ])

    car.merge(data);

    await car.save();
    return car


  }

  /**
   * Delete a car with id.
   * DELETE cars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, auth, response }) {
    const car = await Car.findOrFail(params.id);

    if (car.user_id != auth.user.id) {
      return response.status(401).send({ error: "Not authorized" });
    }

    await car.delete();

  }
}

module.exports = CarController;
