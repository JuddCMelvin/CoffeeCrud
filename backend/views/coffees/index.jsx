const React = require('react');
const Def = require('../default');

function index(data) {
    let coffeesFormatted = data.coffees.map((coffee, index) => {
        return (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card h-100 text-center">
                    <img src={coffee.pic} alt={coffee.name} className="card-img-top img-fluid" />
                    <div className="card-body">
                        <h5 className="card-title">
                            <a href={`/coffees/${index}`}>
                                {coffee.name}
                            </a>
                        </h5>
                        <p className="card-text">{coffee.types}</p>
                        <p className="card-text">Located in {coffee.city}, {coffee.state}</p>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <Def>
            <main className="container">
                <h1 className="text-center mb-4">COFFEE INDEX PAGE</h1>
                <div className="row justify-content-center">
                    {coffeesFormatted}
                </div>
            </main>
        </Def>
    );
}

module.exports = index;
