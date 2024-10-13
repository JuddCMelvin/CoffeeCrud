const React = require('react');
const Def = require('../default');

function show(data) {
    return (
        <Def>
            <main>
                <h1>{data.coffee.name}</h1>
                <img src={data.coffee.pic} alt={data.coffee.name} />
                <p>Located in {data.coffee.city}, {data.coffee.state}</p>
                <p>{data.coffee.types}</p>
                
                {/* Edit button */}
                <a href={`/coffees/${data.coffee.id}/edit`} className="btn btn-warning">
                    Edit
                </a>

                {/* Delete form */}
                <form method="POST" action={`/coffees/${data.coffee.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    );
}

module.exports = show;
