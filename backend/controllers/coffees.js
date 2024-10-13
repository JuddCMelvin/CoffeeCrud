const router = require('express').Router()

let coffees = [{
    name: 'Java Jolt',
    city: 'Seattle',
    state: 'WA',
    types: 'Espresso, Latte, Cold Brew',
    pic: 'https://placekitten.com/250/250'
}, {
    name: 'Brewed Awakenings',
    city: 'Portland',
    state: 'OR',
    types: 'Cappuccino, Mocha, Drip Coffee',
    pic: 'https://placekitten.com/250/250'
}, {
    name: 'Cuppa Bliss',
    city: 'San Francisco',
    state: 'CA',
    types: 'Espresso, Americano, Nitro Cold Brew',
    pic: 'https://placekitten.com/250/250'
}, {
    name: 'The Daily Grind',
    city: 'Austin',
    state: 'TX',
    types: 'Latte, Macchiato, French Press',
    pic: 'https://placekitten.com/250/250'
}, {
    name: 'Perk Up Cafe',
    city: 'New York',
    state: 'NY',
    types: 'Cortado, Flat White, Iced Coffee',
    pic: 'https://placekitten.com/250/250'
}];

router.get('/', (req, res) => {
    res.render('coffees/index', { coffees })
})

router.get('/new', (req, res) => {
    res.render('coffees/new')
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
