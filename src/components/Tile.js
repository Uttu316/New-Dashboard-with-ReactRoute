import React,{Fragment} from 'react'

const Tile = ({data}) => {


    return (
        <Fragment>
            {data.exist ? (
            <div className="card-panel tile">
                    <h1 className="title">{data.title}</h1>
                    <p className="subtitle">{data.subtitle}</p>
                    <p className="line">{data.line1}</p>
                    <p className="line">{data.line2}</p>
                    <p className="subtitle">Period: {data.period}</p>
                    <p className="date">Last Updated: {data.updated}</p>
            </div>) : (
                <div className="card-panel tile">
                    <button type="button">
                        <i className="fas fa-plus-square"></i>
                    </button>
                </div>            
            )}
        </Fragment>
    )
}


export default Tile
