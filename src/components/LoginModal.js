/* eslint-disable react/prop-types */
import React from "react";
import { render } from "react-dom";
import { Tabs } from "@yazanaabed/react-tabs";
import Login from "./Login";
import Register from "./Register";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";

const styles = {
	fontFamily: "sans-serif",
	textAlign: "center",
	fontWeight: "bold",
	fontSize: 18,
	margin: "auto",
	marginTop: "3%",
	// padding: 'auto',
	padding: "20px",
	minWidth: "40%",
	// minHeight: '%',
	background: "white",
	// border: '2px solid black'
};

class LoginModal extends React.Component {
	render() {
		console.log("IsOpen value in login modal: " + this.props.isopen);
		return (
			<Grid container>
				<Grid item xs={12} md={12} sm={6}>
					<div style={styles}>
						<Tabs
							activeTab={{
								id: "tab1"
							}}
						>
							<Tabs.Tab id="tab1" title="Sign in">
								<Login isopen={ this.props.isopen } />
							</Tabs.Tab>
							<Tabs.Tab id="tab2" title="Create an account">
								<Register isopen={ this.props.isopen }/>
							</Tabs.Tab>
						</Tabs>
					</div>
				</Grid>
			</Grid>
		);
	}
}

export default LoginModal;
