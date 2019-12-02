import React from "react";
import Tile from "./Tile";
import { Link } from "react-router-dom";
const Tiles = props => {
    const indicators = props.MonthtoDatedata.columns;
    const tilesnewdata = [];
    if (props.MonthtoDatedata.columns) {
        switch (props.filtersRadioenabled) {
            case "month-to-date":
                {
                    const lastDate =
                        props.MonthtoDatedata[props.MonthtoDatedata.length - 1]
                            .Date;
                    indicators.map(item => {
                        if (item !== "Date") {
                            const name = item.replace(/\s/g, "");
                            const link = item.replace(/\s/g, "").toLowerCase();
                            const currvalue =
                                props.MonthtoDatedata[
                                    props.MonthtoDatedata.length - 1
                                ][name];
                            const prevvalue =
                                props.MonthtoDatedata[
                                    props.MonthtoDatedata.length - 2
                                ][name];
                            tilesnewdata.push({
                                title: item,
                                link: link,
                                date: lastDate,
                                currvalue: currvalue,
                                prevvalue: prevvalue
                            });
                        }
                    });
                }
                break;
            case "quater-to-date":
                {
                    const lastDate =
                        props.QuatertoDatedata[
                            props.QuatertoDatedata.length - 1
                        ].Date;
                    indicators.map(item => {
                        if (item !== "Date") {
                            const name = item.replace(/\s/g, "");
                            const link = item.replace(/\s/g, "").toLowerCase();
                            const currvalue =
                                props.QuatertoDatedata[
                                    props.QuatertoDatedata.length - 1
                                ][name];
                            const prevvalue =
                                props.QuatertoDatedata[
                                    props.QuatertoDatedata.length - 2
                                ][name];
                            tilesnewdata.push({
                                title: item,
                                link: link,
                                date: lastDate,
                                currvalue: currvalue,
                                prevvalue: prevvalue
                            });
                        }
                    });
                }
                break;
            case "year-to-date": {
                const lastDate =
                    props.YeartoDatedata[props.YeartoDatedata.length - 1].Date;
                indicators.map(item => {
                    if (item !== "Date") {
                        const name = item.replace(/\s/g, "");
                        const link = item.replace(/\s/g, "").toLowerCase();
                        const currvalue =
                            props.YeartoDatedata[
                                props.YeartoDatedata.length - 1
                            ][name];
                        const prevvalue =
                            props.YeartoDatedata[
                                props.YeartoDatedata.length - 2
                            ][name];
                        tilesnewdata.push({
                            title: item,
                            link: link,
                            date: lastDate,
                            currvalue: currvalue,
                            prevvalue: prevvalue
                        });
                    }
                });
            }
        }
    }
    return (
        <div className="row">
            <div className="tiles">
                {tilesnewdata.map(each => (
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
