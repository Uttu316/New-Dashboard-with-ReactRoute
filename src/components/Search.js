import React, {Fragment} from 'react'

const Seacrh = props => {
    return (
        <Fragment>
            <form>
                <div className="searchbar">
                    <input className="browser-default search" type="search" required/>
                    <i className="fas fa-search"></i>
                </div>
            </form>
            <div className="suggestions">
                <div className="popular">
                    <h1>Popular Search Tags</h1>
                    <div className="group-3">
                        <p>Electricity</p>
                        <p>Electricity</p>
                        <p>Electricity</p>
                        <p>Petroleum</p>
                        <p>Petroleum</p>
                        <p>Petroleum</p>
                    </div>
                </div>
                <div className="recent">
                    <h1>Recent Searches</h1>
                    <div className="group-2">
                        <p>Electricity</p>
                        <p>Electricity</p>
                        <p>Petroleum</p>
                        <p>Petroleum</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Seacrh
