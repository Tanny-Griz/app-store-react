const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
    async create(req, res) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }

    async delete(req, res, next) {
        const {name} = req.body
        try {
            await Brand.destroy({ where: {name} })
            res.status(200).send('Removed Successfully')
        } catch (e) {
            next(ApiError.badRequest('Deleting data failed.'))
        }
    }

}

module.exports = new BrandController()