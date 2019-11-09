import React from "react";
import MainChart from "./MainChart";
import Modal from "../Modal";
import NewIndicator from "../modalcomponents/NewIndicator";
import Analysis from "../modalcomponents/Analysis";
import Download from "../modalcomponents/Download";
import Compare from "../modalcomponents/Compare";
import * as d3 from "d3";
import MonthtoDate from "../../data/Book1.csv";
import QuatertoDate from "../../data/Book2.csv";
import YeartoDate from "../../data/Book3.csv";
const Chartcomponent = props => {
	const [MonthtoDatedata, ImportMonthtoDate] = React.useState([]);
	const [QuatertoDatedata, ImportQuatertoDate] = React.useState([]);
	const [YeartoDatedata, ImportYeartoDate] = React.useState([]);
	const [filtersRadioenabled, setFiltersRadioenabled] = React.useState(
		"month-to-date"
	);
	const [currentbuttonClicked, setCurrentButtonClicked] = React.useState(
		null
	);
	const [showModal, setShowModal] = React.useState(false);
	const datasetproperties = {
		type: "",
		label: "",
		data: null,
		fill: false,
		borderColor: "",
		backgroundColor: ""
	};
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
		d3.csv(QuatertoDate)
			.then(function(data) {
				ImportQuatertoDate(replaceKeys(data));
			})
			.catch(function(err) {
				throw err;
			});
		d3.csv(YeartoDate)
			.then(function(data) {
				ImportYeartoDate(replaceKeys(data));
			})
			.catch(function(err) {
				throw err;
			});
	}, []);

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
				<MainChart
					currentFilter={filtersRadioenabled}
					currentTile={props.currentTile}
					MonthtoDatedata={MonthtoDatedata}
					YeartoDatedata={YeartoDatedata}
					QuatertoDatedata={QuatertoDatedata}
				/>
			</div>
			<div className="chart-component-btns">
				<button
					onClick={() => {
						setCurrentButtonClicked("compare");
						setShowModal(!showModal);
					}}
				>
					Compare
				</button>
				<button
					onClick={() => {
						setCurrentButtonClicked("newindicator");
						setShowModal(!showModal);
					}}
				>
					New Indicator
				</button>
				<button
					onClick={() => {
						setCurrentButtonClicked("analysis");
						setShowModal(!showModal);
					}}
				>
					Analysis
				</button>
				<button
					onClick={() => {
						setCurrentButtonClicked("download");
						setShowModal(!showModal);
					}}
				>
					Download
				</button>
			</div>
			{currentbuttonClicked === "newindicator" && (
				<Modal
					show={showModal}
					children={<NewIndicator list={MonthtoDatedata.columns} />}
					handleClose={() => setShowModal(!showModal)}
				/>
			)}
			{currentbuttonClicked === "analysis" && (
				<Modal
					show={showModal}
					children={<Analysis />}
					handleClose={() => setShowModal(!showModal)}
				/>
			)}
			{currentbuttonClicked === "compare" && (
				<Modal
					show={showModal}
					children={<Compare />}
					handleClose={() => setShowModal(!showModal)}
				/>
			)}
			{currentbuttonClicked === "download" && (
				<Modal
					show={showModal}
					children={<Download />}
					handleClose={() => setShowModal(!showModal)}
				/>
			)}
		</div>
	);
};

export default Chartcomponent;
