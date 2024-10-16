const React = require('react')
const Def = require('../default')

function index(data) {
    let coffeesFormatted = data.coffees.map((coffee, index) => {
        return (
            <div className="col-sm-6">
                <h2>
                    <a href={`/coffees/${index}`} >
                        {coffee.name}
                    </a></h2>
                <p className="text-center">
                    {coffee.types}
                </p>
                <img src={coffee.pic} alt={coffee.name} />
                <p className="text-center">
                    Located in {coffee.city}, {coffee.state}
                </p>
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

