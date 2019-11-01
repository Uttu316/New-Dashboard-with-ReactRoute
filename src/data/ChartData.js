import React from "react";

export const ChartData = {
	labels: ["Jan", "Feb", "March"],
	datasets: [
		{
			label: "# of Votes",
			data: [1, 2, 3],
			backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(54, 162, 235, 0.2)"
			]
		}
	]
};

export const ChartOptions = {
	maintainAspectRatio: false
};
