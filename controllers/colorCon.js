const Bio = require('../models/colorApi.js')



const colorCon = {
    index: async (req, res) => {
        try {
            const color = await color.find({})
            res.json(color)
        } catch (err) {
            console.log(err)
        }
    },
    show: async (req, res) => {
        try {
            const colorId = req.params.id
            const color = await color.findById(colorId)
            res.json(color)
        } catch (err) {
            console.log(err)
            res.json(err)
        }
    },
    create: async (req, res) => {
        try {
          const newColor = req.color
          const savedColor = await color.create(newColor)
          res.json(savedColor)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    },
    
    delete: async (req, res) => {
        console.log('DELETE')
        try {
          const colorId = req.params.id
          const deletedColor = await color.findByIdAndRemove(colorId)
          res.json(deletedColor)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    }
}

module.exports = colorCon
