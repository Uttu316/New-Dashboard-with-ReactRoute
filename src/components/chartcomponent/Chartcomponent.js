import React from "react";
import MainChart from "./MainChart";
import Modal from "../Modal";
import NewIndicator from "../modalcomponents/NewIndicator";
import Analysis from "../modalcomponents/Analysis";
import Download from "../modalcomponents/Download";
import Compare from "../modalcomponents/Compare";
const Chartcomponent = props => {
  const [currentbuttonClicked, setCurrentButtonClicked] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const datasetproperties = {
    type: "",
    label: "",
    data: null,
    fill: false,
    borderColor: "",
    backgroundColor: ""
  };

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
              checked={props.filtersRadioenabled === "month-to-date"}
              onChange={e => props.setFiltersRadioenabled(e.target.value)}
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
              checked={props.filtersRadioenabled === "quater-to-date"}
              onChange={e => props.setFiltersRadioenabled(e.target.value)}
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
              checked={props.filtersRadioenabled === "year-to-date"}
              onChange={e => props.setFiltersRadioenabled(e.target.value)}
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
          currentFilter={props.filtersRadioenabled}
          currentTile={props.currentTile}
          MonthtoDatedata={props.MonthtoDatedata}
          YeartoDatedata={props.YeartoDatedata}
          QuatertoDatedata={props.QuatertoDatedata}
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
          children={<NewIndicator list={props.MonthtoDatedata.columns} />}
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
