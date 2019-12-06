import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import Chartcomponent from "./components/chartcomponent/Chartcomponent";
import * as d3 from "d3";
import MonthtoDate from "./data/Book1.csv";
import QuatertoDate from "./data/Book2.csv";
import YeartoDate from "./data/Book3.csv";
const App = () => {
  const [MonthtoDatedata, ImportMonthtoDate] = React.useState([]);
  const [QuatertoDatedata, ImportQuatertoDate] = React.useState([]);
  const [YeartoDatedata, ImportYeartoDate] = React.useState([]);
  const [filtersRadioenabled, setFiltersRadioenabled] = React.useState(
    "month-to-date"
  );
  const indicators = MonthtoDatedata.columns ? MonthtoDatedata.columns : [];

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
    <Router basename="/">
      <Fragment>
        <Route exact path="/">
          <Navbar />
          <MainPage
            filtersRadioenabled={filtersRadioenabled}
            setFiltersRadioenabled={setFiltersRadioenabled}
            MonthtoDatedata={MonthtoDatedata}
            QuatertoDatedata={QuatertoDatedata}
            YeartoDatedata={YeartoDatedata}
          />
        </Route>
        {indicators.map((item, index) => {
          if (item !== "Date") {
            const link = item.replace(/\s/g, "").toLowerCase();
            const keyname = item.replace(/\s/g, "");
            return (
              <Route exact path={`/${link}`}>
                <Chartcomponent
                  filtersRadioenabled={filtersRadioenabled}
                  setFiltersRadioenabled={setFiltersRadioenabled}
                  MonthtoDatedata={MonthtoDatedata}
                  QuatertoDatedata={QuatertoDatedata}
                  YeartoDatedata={YeartoDatedata}
                  currentTile={keyname}
                />
              </Route>
            );
          }
        })}
      </Fragment>
    </Router>
  );
};

export default App;
