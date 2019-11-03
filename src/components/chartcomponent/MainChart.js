import React from "react";
import { Bar } from "react-chartjs-2";

const MainChart = props => {
    const dates = props.csvdata.map(function(eachdate) {
        return eachdate.Date;
    });

    //console.log(props.csvdata, "main");
    /* function MonthtoDate(a, b) {
        var dateA = new Date(a.date).getMonth();
        var dateB = new Date(b.date).getMonth();
        return dateA > dateB ? 1 : -1;
    }
    function YeartoDate(a, b) {
        var dateA = new Date(a.date).getYear();
        var dateB = new Date(b.date).getYear();
        return dateA > dateB ? 1 : -1;
    }
    if (props.currentFilter === "month-to-date") {
        fileImportedData.sort(MonthtoDate);
    }
    if (props.currentFilter === "year-to-date") {
        fileImportedData.sort(YeartoDate);
    }*/
    //console.log(props);
    return (
        <React.Fragment>
            <Bar
                data={{
                    labels: dates,
                    datasets: [
                        {
                            type: "line",
                            label: "New Customer",
                            data: props.dataset,
                            fill: false,
                            borderColor: "orange",
                            backgroundColor: "pink"
                        },
                        {
                            type: "bar",
                            label: " Customer",
                            data: props.dataset,
                            fill: false,
                            borderColor: "green",
                            backgroundColor: "pink"
                        }
                    ]
                }}
                options={{
                    maintainAspectRatio: false
                    /*scales: {
                        xAxes: [
                            {
                                format: "time",
                                time: {
                                    parser: "MM/DD/YYYY",
                                    unit: "month",
                                    displayFormats: {
                                        month: "MMM"
                                    }
                                }
                            }
                        ]
                    }*/
                }}
            />
        </React.Fragment>
    );
};

export default MainChart;
