import React from "react";
import Tile from "./Tile";
//import * as d3 from "d3";
//import MonthtoDate from "../data/Book1.csv";
import { Link } from "react-router-dom";
const Tiles = props => {
    /*const data = [
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
    const [MonthtoDatedata, ImportMonthtoDate] = React.useState([]);
    const [columns,setcolumns]= React.useState([]);
    const [links,setLinks]  = React.useState([])
    function replaceKeys(object) {
        Object.keys(object).forEach(function(key) {
            var newKey = key.replace(/\s+/g, "");
            if (object[key] && typeof object[key] === "object") {
                replaceKeys(object[key]);
            }
            if (key !== newKey) {
                object[newKey] = object[key];
                delete object[key];
            }
        });
        return object;
    }
    React.useEffect(() => {
        d3.csv(MonthtoDate)
            .then(function(data) {
                ImportMonthtoDate(replaceKeys(data));
                
            })
            .catch(function(err) {
                throw err;
            });
        
    }, []);
    React.useEffect(()=>{
        
        if(MonthtoDatedata.columns){
            const extractcolumns  = (MonthtoDatedata.columns).slice(1)
            setcolumns(extractcolumns)
            const extractlinks  = ((MonthtoDatedata.columns).slice(1)).map(str => (str.replace(/\s/g, '').toLowerCase()))
            setLinks(extractlinks)
        }
    },[MonthtoDatedata])*/}
    return (
        <div className="row">
            <div className="tiles">
                {columns.map((each,index) => (
                    <Link to={`/${links[index]}`} key={index}>
                        <div className="col l3">
                            <Tile title={each} link={links[index]} data={MonthtoDatedata} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Tiles;
