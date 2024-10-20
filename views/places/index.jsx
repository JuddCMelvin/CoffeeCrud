const React = require('react');
const Def = require('../default');

function index(data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card h-100 text-center">
                    <img src={place.pic} alt={place.name} className="card-img-top img-fluid" />
                    <div className="card-body">
                        <h5 className="card-title">
                            <a href={`/places/${place.id}`}>
                                {place.name}
                            </a>
                        </h5>
                        {/* <p className="card-text">{coffee.types}</p> */}
                        <p className="card-text">Located in {place.city}, {place.state}</p>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <Def>
            <main className="container">
                <h1 className="text-center mb-4">PLACES INDEX PAGE</h1>
                <div className="row justify-content-center">
                    {placesFormatted}
                </div>
            </main>
        </Def>
    );
}

module.exports = index;
