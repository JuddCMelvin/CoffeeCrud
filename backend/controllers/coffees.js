const router = require('express').Router()

router.get('/', (req, res) => {
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
    res.render('coffees/index', {coffees})
})

module.exports = router
