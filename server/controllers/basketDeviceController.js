const {BasketDevice} = require('../models/models')
const ApiError = require('../error/ApiError')

class BasketDeviceController {
  async getAll(req, res, next) {
    try {
      const basketId = req.params
      if (basketId) {
        const basketDevice = await BasketDevice.findAndCountAll({ where: basketId })
        return res.json(basketDevice)
      }
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async create(req, res, next) {
    try {
      let {basketId, deviceId} = req.body
      const basket = await BasketDevice.create({basketId, deviceId})

      return res.json(basket)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
}

module.exports = new BasketDeviceController()