// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// Controllers & Routes
app.use('/coffees', require('./controllers/coffees'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

// Adding a fallback for PORT if not defined in .env
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`)
});


