/* eslint-disable react/prop-types */
import React, { Component } from "react";
//import MainHeader from "./MainHeader";
// import MainLogin from './MainLogin';
import Footer from "./Footer";
import PropTypes from "prop-types";
//import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import { message } from "antd";
import { connect } from "react-redux";
//import { FacebookLoginButton,GoogleLoginButton } from "react-social-login-buttons";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import firebase from "../firebase";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block",
    marginTop: 15,
    // marginBottom: 40,
    // border: '2px solid red',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 500,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 300,
    // border: '2px solid red',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    backgroundColor: "#664CB6",
    color: "white"
  },
  forgot: {
    marginTop: theme.spacing.unit * 3,
    textAlign: "left"
  },
  google: {
    marginTop: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3
  },
  modalpaper: {
    position: "absolute",
    color: "black",
    width: "35%",
    // minHeight: '10%',
    // height: '50%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none",
    borderRadius: 10
    // border: '2px solid blue',
  },
  title: {
    color: "#048998",
    paddingTop: "20px"
  },
  button: {
    color: "white",
    backgroundColor: "#048998"
  },
  modaltitle: {
    color: "#048998"
  }
});
const intialState = {
  email: "",
  password: "",
  emailerror: "",
  passworderror: "",
  login: false,
  redirect: false,
  isLoggedIn: false,
  isopen: false,
  modalOpen: null
};
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = intialState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    if (this.props.is_logged_in) {
      let path = "/";
      this.props.history.push(path);
      message.success("You are already logged in");
    }
  }
  handleModalOpen = () => {
    this.setState({ isopen: true });
  };
  handleModalClose = () => {
    this.setState({ isopen: false });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    let currentContext = this;
    e.preventDefault();
    const isvalid = this.validate();
    if (isvalid) {
      console.log(this.state);
      var history = this.props.history;
      const user = {
        email: this.state.email,
        password: this.state.password
      };
      this.setState(intialState);
    }

    /*  firebase
     .auth()
     .signInWithEmailAndPassword(this.state.email, this.state.password)
     .then((user) => {
       this.props.history.push('/');
     })
     .catch((error) => {
       this.setState({ error: error });
     }); */
  };
  validate = () => {
    let emailerror = "";
    let passworderror = "";
    if (!this.state.email.includes("@") && !this.state.email.includes(".")) {
      emailerror = "Invalid email";
    }
    if (this.state.password.length < 3) {
      passworderror = "Password should contain atleast 3 letters";
    }
    if (emailerror || passworderror) {
      this.setState({ emailerror, passworderror });
      return false;
    }

    return true;
  };
  render() {
    console.log("state of modal: " + this.props.isopen);
    console.log("New state: " + this.state.modalOpen);
    const getModalStyle = () => {
      const top = 50;
      const left = 50;
      return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`
      };
    };
    const { classes } = this.props;
    return (
      <Grid container>
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <form className={classes.form} onSubmit={this.onSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  autoFocus
                />
              </FormControl>
              <div style={{ color: "red", fontSize: 12 }}>
                {this.state.emailerror}
              </div>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  autoComplete="current-password"
                />
              </FormControl>
              <div style={{ color: "red", fontSize: 12 }}>
                {this.state.passworderror}
              </div>
              <br />
              <Typography className={classes.forgot}>
                <Link onClick={this.handleModalOpen}>Forgot Password?</Link>
                <Modal
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  open={this.state.isopen}
                  onClose={this.handleModalClose}
                >
                  <div style={getModalStyle()} className={classes.modalpaper}>
                    <Paper className={classes.paper}>
                      <form
                        className={classes.form}
                        onSubmit={() => this.handleModalClose()}
                      >
                        <FormControl margin="normal" fullWidth>
                          <InputLabel htmlFor="email">Email Address</InputLabel>
                          <Input
                            id="email"
                            name="email"
                            required
                            autoComplete="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            autoFocus
                          />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                          <InputLabel htmlFor="password">Password</InputLabel>
                          <Input
                            name="password"
                            type="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            autoComplete="current-password"
                          />
                        </FormControl>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          className={classes.submit}
                          onClick={this.handleModalClose}
                        >
                          Send email
                        </Button>
                        ​
                      </form>
                    </Paper>
                  </div>
                </Modal>
              </Typography>
              <Link to="/dashboard" className={classes.links}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                  onClick={() => {
                    this.setState({
                      modalOpen: false
                    });
                  }}
                >
                  Sign in
                </Button>
              </Link>
              {
                // <Typography>
                //   Create an account?  &nbsp;<Link to="/register">Signup</Link>
                // </Typography>
              }
              {
                //   <div>
                // <Button
                //   type="submit"
                //   variant="contained"
                //   color="primary"
                //   className={classes.google}
                // >
                //   google
                // </Button>
                // <Button
                //   type="submit"
                //   variant="contained"
                //   color="primary"
                //  className={classes.google}
                // >
                //   facebook
                // </Button>
                // </div>
              }
            </form>
          </Paper>
        </main>
        <br />
        <br />
      </Grid>
    );
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Login);
