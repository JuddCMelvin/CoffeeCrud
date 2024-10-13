const React = require('react')
const Def = require('../default')

function index(data) {
    let coffeesFormatted = data.coffees.map((coffee) => {
        return (
            <div>
                <h2>{coffee.name}</h2>
                <img src={coffee.pic} alt={coffee.name} />
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>COFFEE INDEX PAGE</h1>
                {coffeesFormatted}
            </main>
        </Def>
    )
}

module.exports = index
