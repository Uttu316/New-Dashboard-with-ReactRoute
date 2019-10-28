import React from 'react'
import Tile from './Tile'

const Footer = props => {

    const footer = [
        {id:1},{id:2}
    ]

    return (
        <div className="row">
            <div className="tiles">
                {footer.map((each)=>(
                    <div key={each.id} className="col l6">
                        <Tile data={each}/>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Footer
