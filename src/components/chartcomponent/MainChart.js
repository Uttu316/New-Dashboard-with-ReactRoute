import React from "react";
import { Bar } from "react-chartjs-2";
import * as d3 from "d3";
import CsvData from "../../data/CsvData.csv";
const MainChart = props => {
    const [fileImportedData, setfileImportedData] = React.useState([]);
    const dates = fileImportedData.map(function(eachdate) {
        return eachdate.Date;
    });
    const newcustomers = fileImportedData.map(function(eachcustomer) {
        return eachcustomer.NewCustomers;
    });
    React.useEffect(() => {
        d3.csv(CsvData)
            .then(function(data) {
                setfileImportedData(data);
            })
            .catch(function(err) {
                throw err;
            });
    }, []);
    function MonthtoDate(a, b) {
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
    }
    console.log(props.currentFilter, dates);
    return (
        <React.Fragment>
            <Bar
                data={{
                    labels: dates,
                    datasets: [
                        {
                            label: "# of Votes",
                            data: newcustomers,
                            backgroundColor: "red"
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
