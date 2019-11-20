import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import Chartcomponent from "./components/chartcomponent/Chartcomponent";
const App = () => {
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
				<Route path="/ppcincremental">
					<Chartcomponent currentTile="ppcincremental" />
				</Route>
				<Route path="/productsold">
					<Chartcomponent currentTile="productsold" />
				</Route>
				<Route path="/totalcustomers">
					<Chartcomponent currentTile="totalcustomers" />
				</Route>
			</Fragment>
		</Router>
	);
};

export default App;
