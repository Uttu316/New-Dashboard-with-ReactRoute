import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import Chartcomponent from "./components/chartcomponent/Chartcomponent";
function App() {
	return (
		<Router basename="/">
			<Fragment>
				<Route exact path="/">
					<Navbar />
					<MainPage />
				</Route>
				<Route path="/newcustomers">
					<Chartcomponent currentTile="newcustomers" />
				</Route>
				<Route path="/currentbalance">
					<Chartcomponent currentTile="currentbalance" />
				</Route>
				<Route path="/productssold">
					<Chartcomponent currentTile="productssold" />
				</Route>
				<Route path="/gdp">
					<Chartcomponent currentTile="gdp" />
				</Route>
			</Fragment>
		</Router>
	);
}

export default App;
