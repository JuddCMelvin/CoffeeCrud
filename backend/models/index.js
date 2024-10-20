const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/places', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

console.log('Mongo URI:','mongodb://localhost:27017/places');

module.exports.Place = require('./places')