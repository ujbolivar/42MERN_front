import React from "react";

import "./Card.css";

export default function Card(props) {
	return (
		<div className="noteCard" style={{}}>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<h2 style={{ margin: 0 }}>#{props.id}</h2>
				<h2 style={{ margin: 0 }}>idUser: {props.userId}</h2>
			</div>
			<h3 style={{ margin: 0 }}>{props.title}</h3>
			<p>{props.body}</p>
		</div>
	);
}
