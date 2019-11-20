import React from "react";
import Tile from "./Tile";
import tilesdata from "../data/tilesdata.json";
import { Link } from "react-router-dom";
const Tiles = props => {
    return (
        <div className="row">
            <div className="tiles">
                {tilesdata.map(each => (
                    <Link to={`/${each.link}`} key={each.title}>
                        <div className="col l3">
                            <Tile data={each} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Tiles;
