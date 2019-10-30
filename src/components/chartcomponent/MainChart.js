import React from "react";
import { Bar } from "react-chartjs-2";
import { ChartData, ChartOptions } from "../../data/ChartData";
const MainChart = props => {
    const { ...cd } = ChartData;
    const { ...cop } = ChartOptions;
    const [chartdata, setChartData] = React.useState({ cd });
    const [chartOptions, setChartOptions] = React.useState({ cop });
    return (
        <React.Fragment>
            <Bar data={chartdata.cd} options={chartOptions.cop} />
        </React.Fragment>
    );
};

export default MainChart;
