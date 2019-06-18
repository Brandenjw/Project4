const wheel = require('../models/wheelsApi')



const wheelCon = {
    index: async (req, res) => {
        try {
            const wheel = await wheel.find({})
            res.json(wheel)
        } catch (err) {
            console.log(err)
        }
    },
    show: async (req, res) => {
        try {
            const wheelId = req.params.id
            const wheel = await wheel.findById(wheelId)
            res.json(wheel)
        } catch (err) {
            console.log(err)
            res.json(err)
        }
    },
    create: async (req, res) => {
        try {
          const newWheel = req.wheel
          const savedWheel = await wheel.create(newWheel)
          res.json(savedWheel)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    },
    
    delete: async (req, res) => {
        console.log('DELETE')
        try {
          const wheelId = req.params.id
          const deletedWheel = await wheel.findByIdAndRemove(wheelId)
          res.json(deletedWheel)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    }
}

module.exports = wheelCon
