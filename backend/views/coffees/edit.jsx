const React = require('react')
const Def = require('../default.jsx')

function edit_form(data) {
    return (
        <Def>
            <main>
                <h1>Edit Coffee</h1>
                <form method="POST" action={`/coffees/${data.coffee.id}?_method=PUT`}>
                    <div className="form-group">
                        <label htmlFor="name">Coffee Name</label>
                        <input className="form-control" id="name" name="name" value={data.coffee.name} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Coffee Picture (URL)</label>
                        <input className="form-control" id="pic" name="pic" value={data.coffee.pic} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" value={data.coffee.city} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" value={data.coffee.state} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="types">Coffee Types (comma-separated)</label>
                        <input className="form-control" id="types" name="types" value={data.coffee.types} required />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Update Coffee" />
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form
