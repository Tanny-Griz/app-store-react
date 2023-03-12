const ApiError = require("../error/ApiError")

class UserController {
  async registration(req, res) {

  }
  async loin(req, res) {

  }
  async check(req, res, next) {
    const {id} = req.query
    if(!id) {
      return next(ApiError.badRequest('No set id'))
    }
    res.json(id)
  }
}

module.exports = new UserController()