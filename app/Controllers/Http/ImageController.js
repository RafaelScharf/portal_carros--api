"use strict";

const Car = use("App/Models/Car");
const Hash = use("Hash");
const Helpers = use("Helpers");

/**
 * Resourceful controller for interacting with images
 */
class ImageController {
  async show({ params, response }) {
    return response.download(Helpers.tmpPath(`uploads/${params.path}`));
  }

  /**
   * Create/save a new image.
   * POST images
   */
  async store({ params, request }) {
    const car = await Car.findOrFail(params.id);

    const images = request.file("image", {
      types: ["image"],
      size: "2mb"
    });

    await images.moveAll(Helpers.tmpPath("car-images"), file => ({
      name: `${new Date().getTime()}${Math.floor(Math.random() * 1000 + 1)}.${
        file.subtype
      }`
    }));

    if (!images.movedAll()) {
      return images.errors();
    }

    await Promise.all(
      images
        .movedList()
        .map(image => car.car_images().create({ path: image.fileName }))
    );
  }
}

module.exports = ImageController;
