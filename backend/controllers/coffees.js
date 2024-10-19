const router = require('express').Router()
const coffees = require('../models/coffees.js')

router.get('/', (req, res) => {
    res.render('coffees/index', { coffees })
})

router.get('/new', (req, res) => {
    res.render('coffees/new')
})

router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    coffees.push(req.body)
    res.redirect('/coffees')
})


router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!coffees[id]) {
        res.render('error404')
    }
    else {
        res.render('coffees/show', { coffee: coffees[id] })
    }
})

router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!coffees[id]) {
        res.render('error404')
    }
    else {
        res.render('coffees/edit', { coffee: coffees[id] })
    }
})

router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!coffees[id]) {
        res.render('error404')
    }
    else {
        // Dig into req.body and make sure data is valid
        if (!req.body.pic) {
            // Default image if one is not provided
            req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }

        // Save the new data into places[id]
        coffees[id] = req.body
        res.redirect(`/coffees/${id}`)
    }
})

router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!coffees[id]) {
        res.render('error404')
    }
    else {
        coffees.splice(id, 1)
        res.redirect('/coffees')
    }
})



module.exports = router
