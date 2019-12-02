import React, { Fragment } from "react";
import Tiles from "./Tiles";
//import Search from './Search';
import Footer from "./Footer";
const MainPage = props => {
	return (
		<Fragment>
			<div className="page">
				<div
					className="chart-component-filters"
					style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}
				>
					<form>
						<label htmlFor="month-to-date">
							Month to Date
							<input
								type="radio"
								value="month-to-date"
								name="date-fromat"
								checked={
									props.filtersRadioenabled ===
									"month-to-date"
								}
								onChange={e =>
									props.setFiltersRadioenabled(e.target.value)
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
								checked={
									props.filtersRadioenabled ===
									"quater-to-date"
								}
								onChange={e =>
									props.setFiltersRadioenabled(e.target.value)
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
								checked={
									props.filtersRadioenabled === "year-to-date"
								}
								onChange={e =>
									props.setFiltersRadioenabled(e.target.value)
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
				<Tiles
					filtersRadioenabled={props.filtersRadioenabled}
					setFiltersRadioenabled={props.setFiltersRadioenabled}
					MonthtoDatedata={props.MonthtoDatedata}
					QuatertoDatedata={props.QuatertoDatedata}
					YeartoDatedata={props.YeartoDatedata}
				/>
				<Footer />
			</div>
		</Fragment>
	);
};

export default MainPage;
