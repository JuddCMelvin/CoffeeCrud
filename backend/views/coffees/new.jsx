const React = require('react')
const Def = require('../default')

function new_form() {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form method="POST" action="/coffees">
                    <div className="form-group">
                        <label htmlFor="name">Coffee Name</label>
                        <input className="form-control" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Coffee Picture (URL)</label>
                        <input className="form-control" id="pic" name="pic" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="types">Coffee Types (comma-separated)</label>
                        <input className="form-control" id="types" name="types" required />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Coffee" />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form
