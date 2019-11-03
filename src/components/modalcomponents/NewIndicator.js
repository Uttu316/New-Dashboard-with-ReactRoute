import React from "react";
const NewIndiactor = props => {
	return (
		<div className="newindicator-container">
			<span className="newindicator-list-heading">
				Select a new Indicator
			</span>
			<div className="newindicator-list">
				{props.list.map(item => {
					return item !== "Date" ? (
						<p className="newindicator-list-item">{item}</p>
					) : null;
				})}
			</div>
		</div>
	);
};
export default NewIndiactor;
