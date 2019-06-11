const Body = require('../models/bodyApi.js')

Body.deleteMany().then(() => {
    const nissand21 = new body({Name: 'scraper', Price: '600', Image: "https://i.imgur.com/wt9nYu3.jpg"})
    return nissand21.save()
  }).then(() => {
    const datsunhilux   =  new body({Name: 'groundlevel', Price: '8000', Image: "https://i.imgur.com/2YvgkF6.jpg"})
    return datsunhilux.save()
  })