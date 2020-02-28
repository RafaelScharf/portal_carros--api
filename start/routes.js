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
