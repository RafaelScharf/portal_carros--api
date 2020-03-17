"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

//Create CRUD routes for users
Route.resource("users", "UserController").apiOnly();
//Routes for auth
Route.post("/sessions", "SessionController.create");
//CRUD routes for car
Route.resource("cars", "CarController")
  .apiOnly()
  .middleware("auth");

//Route for upload images
Route.post("cars/:id/images", "ImageController.store").middleware("auth");

Route.get("images/:path", "ImageController.show");

// Search Cars by key
Route.post("cars/find/:key", "CarController.findCar");
//Search Cars by model
Route.post("cars/find/model/:key", "CarController.findCarByModel");
//Search Cars by brand
Route.post("cars/find/brand/:key", "CarController.findCarByBrand");
//Search Cars by year
Route.post("cars/find/year/:key", "CarController.findCarByYear");
//Search Cars by km
Route.post("cars/find/km/:key", "CarController.findCarByKm");
//Search Cars by fuel
Route.post("cars/find/fuel/:key", "CarController.findCarByFuel");
//Search Cars by color
Route.post("cars/find/color/:key", "CarController.findCarColor");
//Search Cars by price
Route.post("cars/find/price/:key", "CarController.findCarByPrice");




