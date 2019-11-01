import React from "react";
import MainChart from "./MainChart";
const Chartcomponent = props => {
	const [filtersRadioenabled, setFiltersRadioenabled] = React.useState(
		"month-to-date"
	);

	return (
		<div className="chart-component-container">
			<div className="chart-component-filters">
				<form>
					<label htmlFor="month-to-date">
						Month to Date
						<input
							type="radio"
							value="month-to-date"
							name="date-fromat"
							checked={filtersRadioenabled === "month-to-date"}
							onChange={e =>
								setFiltersRadioenabled(e.target.value)
							}
							style={{
								pointerEvents: "auto",
								opacity: 1,
								position: "relative",
								left: 5,
								verticalAlign: "middle"
							}}
						/>
					</label>
					<label htmlFor="quater-to-date">
						Quater to Date
						<input
							type="radio"
							value="quater-to-date"
							name="date-fromat"
							checked={filtersRadioenabled === "quater-to-date"}
							onChange={e =>
								setFiltersRadioenabled(e.target.value)
							}
							style={{
								pointerEvents: "auto",
								opacity: 1,
								position: "relative",
								left: 5,
								verticalAlign: "middle"
							}}
						/>
					</label>
					<label htmlFor="year-to-date">
						Year to Date
						<input
							type="radio"
							value="year-to-date"
							name="date-fromat"
							checked={filtersRadioenabled === "year-to-date"}
							onChange={e =>
								setFiltersRadioenabled(e.target.value)
							}
							style={{
								pointerEvents: "auto",
								opacity: 1,
								position: "relative",
								left: 5,
								verticalAlign: "middle"
							}}
						/>
					</label>
				</form>
			</div>
			<div className="chart-component-title">New Customers</div>
			<div className="chart-component-graph">
				<MainChart currentFilter={filtersRadioenabled} />
			</div>
			<div className="chart-component-btns">
				<button onClick={() => console.log("compare")}>Compare</button>
				<button onClick={() => console.log("new Indicator")}>
					New Indicator
				</button>
				<button onClick={() => console.log("Analysis")}>
					Analysis
				</button>
				<button onClick={() => console.log("Download")}>
					Download
				</button>
			</div>
		</div>
	);
};

export default Chartcomponent;
