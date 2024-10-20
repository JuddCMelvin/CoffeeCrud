const React = require('react')
const Def = require('../default.jsx')

function edit_form(data) {
    return (
        <Def>
            <main>
                <h1>Edit place</h1>
                <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                    <div className="form-group">
                        <label htmlFor="name">place Name</label>
                        <input className="form-control" id="name" name="name" value={data.place.name} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">place Picture (URL)</label>
                        <input className="form-control" id="pic" name="pic" value={data.place.pic} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" value={data.place.city} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" value={data.place.state} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="types">place Types (comma-separated)</label>
                        <input className="form-control" id="types" name="types" value={data.place.types} required />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Update place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form
