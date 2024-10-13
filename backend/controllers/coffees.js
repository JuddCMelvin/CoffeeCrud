const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /coffees')
})

module.exports = router
