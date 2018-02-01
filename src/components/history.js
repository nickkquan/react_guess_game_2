import React from "react";

export default props => {
	const historyList = props.data.map((item, index) => {
		const color =
			item.indexOf("High") > -1
				? "red lighten-5"
				: item.indexOf("Low") > -1 ? "blue lighten-5" : "green lighten-4";

		return (
			<li key={index} className={`${color} center-align collection-item`}>
				{item}
			</li>
		);
	});
	return <ul className="collection">{historyList}</ul>;
};
