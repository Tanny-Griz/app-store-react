const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async delete(req, res, next) {
        const {name} = req.body
        try {
            await Type.destroy({ where: {name} })
            res.status(200).send('Removed Successfully')
        } catch (e) {
            next(ApiError.badRequest('Deleting data failed'))
        }
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }

}

module.exports = new TypeController()