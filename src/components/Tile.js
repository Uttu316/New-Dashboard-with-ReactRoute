import React, { Fragment } from "react";

const Tile = ({ data }) => {
    console.log(data);
    return (
        <Fragment>
            {data ? (
                <div className="card-panel tile">
                    <h1 className="title">{data.title}</h1>
                    <p className="line">{data.date}</p>
                    <p className="subtitle">Current value: {data.currvalue}</p>
                    <p className="date">Last updated value: {data.prevvalue}</p>
                </div>
            ) : (
                <div className="card-panel tile">
                    <button type="button">
                        <i className="fas fa-plus-square"></i>
                    </button>
                </div>
            )}
        </Fragment>
    );
};

export default Tile;
