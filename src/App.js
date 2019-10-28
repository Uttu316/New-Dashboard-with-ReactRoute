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
				<Route path="/newcustomer">
					<Chartcomponent />
				</Route>
			</Fragment>
		</Router>
	);
}

export default App;
