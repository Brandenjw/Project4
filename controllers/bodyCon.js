const body = require('../models/bodyApi.js')



const bodyCon = {
    index: async (req, res) => {
        try {
            const body = await body.find({})
            res.json(body)
        } catch (err) {
            console.log(err)
        }
    },
    show: async (req, res) => {
        try {
            const bodyId = req.params.id
            const body = await body.findById(bodyId)
            res.json(body)
        } catch (err) {
            console.log(err)
            res.json(err)
        }
    },
    create: async (req, res) => {
        try {
          const newBody = req.body
          const savedBody = await body.create(newBody)
          res.json(savedBody)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    },
    update: async (req, res) => {
        try {
          const bodyId = req.params.id
          const updatedBody = req.body
          const savedBody = await body.findByIdAndUpdate(bodyId, updatedBody, {new: true})
          res.json(savedBody)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    },
    delete: async (req, res) => {
        console.log('DELETE')
        try {
          const bodyId = req.params.id
          const deletedBody = await body.findByIdAndRemove(bodyId)
          res.json(deletedBody)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    }
}

module.exports = bodyCon
