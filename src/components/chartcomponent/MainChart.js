import React from "react";
import { Bar } from "react-chartjs-2";

const MainChart = props => {
    let Dates = [];
    let Datasets = [];
    if (props.currentFilter === "month-to-date") {
        Dates = props.MonthtoDatedata.map(function(eachdate) {
            return eachdate.Date;
        });

        switch (props.currentTile) {
            case "newcustomers":
                Datasets = props.MonthtoDatedata.map(function(eachdate) {
                    return eachdate.NewCustomers;
                });
                break;
            case "ppcincremental":
                Datasets = props.MonthtoDatedata.map(function(eachdate) {
                    return eachdate.PPCIncremental;
                });
                break;
            case "productsold":
                Datasets = props.MonthtoDatedata.map(function(eachdate) {
                    return eachdate.ProductsSold;
                });
                break;
            case "totalcustomers":
                Datasets = props.MonthtoDatedata.map(function(eachdate) {
                    return eachdate.TotalCustomers;
                });
                break;
        }
    } else if (props.currentFilter === "quater-to-date") {
        Dates = props.QuatertoDatedata.map(function(eachdate) {
            return eachdate.Date;
        });

        switch (props.currentTile) {
            case "newcustomers":
                Datasets = props.QuatertoDatedata.map(function(eachdate) {
                    return eachdate.NewCustomers;
                });
                break;
            case "ppcincremental":
                Datasets = props.QuatertoDatedata.map(function(eachdate) {
                    return eachdate.PPCIncremental;
                });
                break;
            case "productsold":
                Datasets = props.QuatertoDatedata.map(function(eachdate) {
                    return eachdate.ProductsSold;
                });
                break;
            case "totalcustomers":
                Datasets = props.QuatertoDatedata.map(function(eachdate) {
                    return eachdate.TotalCustomers;
                });
                break;
        }
    } else if (props.currentFilter === "year-to-date") {
        Dates = props.YeartoDatedata.map(function(eachdate) {
            return eachdate.Date;
        });

        switch (props.currentTile) {
            case "newcustomers":
                Datasets = props.YeartoDatedata.map(function(eachdate) {
                    return eachdate.NewCustomers;
                });
                break;
            case "ppcincremental":
                Datasets = props.YeartoDatedata.map(function(eachdate) {
                    return eachdate.PPCIncremental;
                });
                break;
            case "productsold":
                Datasets = props.YeartoDatedata.map(function(eachdate) {
                    return eachdate.ProductsSold;
                });
                break;
            case "totalcustomers":
                Datasets = props.YeartoDatedata.map(function(eachdate) {
                    return eachdate.TotalCustomers;
                });
                break;
        }
    }

    //console.log(Datasets);

    return (
        <React.Fragment>
            <Bar
                data={{
                    labels: Dates,
                    datasets: [
                        {
                            type: "line",
                            label: "New Customer",
                            data: Datasets,
                            fill: false,
                            borderColor: "orange",
                            backgroundColor: "pink"
                        },
                        {
                            type: "bar",
                            label: " Customer",
                            data: Datasets,
                            fill: false,
                            borderColor: "green",
                            backgroundColor: "pink"
                        }
                    ]
                }}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </React.Fragment>
    );
};

export default MainChart;
