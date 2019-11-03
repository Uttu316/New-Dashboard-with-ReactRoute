import React from "react";
import Tile from "./Tile";

import { Link } from "react-router-dom";
const Tiles = props => {
    const data = [
        {
            id: 1,
            title: "1.2%",
            subtitle: "(%YoY)",
            line1: "Industrial Production",
            link: "newcustomer",
            line2: "Line 2 of title",
            period: "Jan-19",
            updated: "30-Jan-19",
            exist: true
        },
        {
            id: 2,
            title: "5.1%",
            subtitle: "(% of GDP)",
            link: "currentbalance",
            line1: "Current Account Balance",
            line2: "Line 2 of title",
            period: "15-Jun-19",
            updated: "15-Jun-19",
            exist: true
        },
        {
            id: 3,
            title: "1050000000%",
            subtitle: "(US$ bn)",
            line1: "Population",
            line2: "Line 2 of title",
            link: "product",
            period: "2QFY19",
            updated: "15-Jun-19",
            exist: true
        },
        {
            id: 4,
            title: "0.16",
            subtitle: "(Million Tonnes)",
            line1: "GDP Growth",
            line2: "Line 2 of title",
            link: "gdp",
            period: "FY18",
            updated: "15-Jan-19",
            exist: true
        },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
        { id: 12 }
    ];

    return (
        <div className="row">
            <div className="tiles">
                {data.map(each => (
                    <Link to={`/${each.link}`} key={each.id}>
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
