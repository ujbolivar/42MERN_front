import "./App.css";
import React, { useState, useEffect } from "react";

import axios from 'axios';

import MyForm from "./MyForm";
import MyHeader from "./MyHeader";
import BodyNotes from "./BodyNotes";

function App() {
	const [user, setUser] = useState(1);
	const [data, setData] = useState([]);

	const fetchData = async() => {
		let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
		setData(res.data);
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div style={{ width: "100%" }}>
			<div style={{ display: "flex", width: "100%" }}>
				<MyForm data={data} setData={setData} />
				<MyHeader userNote={user} setUser={setUser} />
			</div>
			<BodyNotes data={data} user={user} />
		</div>
	);
}

export default App;
